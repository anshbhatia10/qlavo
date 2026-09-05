import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { editorialRoute, marketingRoutes, pageComponent } from './route-pages';

/** Runs inside the resolved boundary, never before a lazy page has mounted. */
const RouteScroll = () => {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        let id = hash.slice(1);
        try { id = decodeURIComponent(id); } catch { /* literal malformed hash */ }
        const target = document.getElementById(id) || document.getElementsByName(id)[0];
        if (target) {
          target.scrollIntoView({ block: 'start' });
          if (id === 'main-content') (target as HTMLElement).focus({ preventScroll: true });
        }
      } else {
        window.scrollTo(0, 0);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen flex flex-col antialiased selection:bg-white selection:text-black">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar scrolled={scrolled} />
      <main id="main-content" tabIndex={-1} className={`flex-grow${editorialRoute(pathname) ? ' q-editorial' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

/** Shared boundaries keep server markup and client hydration identical. */
export const AppRoutes: React.FC = () => (
  <Layout>
    <Routes>
      {marketingRoutes.map(([path, name]) => {
        const Page = pageComponent(name);
        return <Route key={path} path={path} element={
          <Suspense fallback={<div className="q-container q-section" role="status">Loading page…</div>}>
            <Page />
            <RouteScroll />
          </Suspense>
        } />;
      })}
    </Routes>
  </Layout>
);

const App: React.FC = () => (
  <HelmetProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </HelmetProvider>
);
export default App;
