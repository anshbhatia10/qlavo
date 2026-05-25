import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import AIVisibility from './pages/AIVisibility';
import GEOResources from './pages/GEOResources';
import AIReport2026 from './pages/AIReport2026';
import AIGlossary from './pages/AIGlossary';
import GEOCalculator from './pages/GEOCalculator';
import GEOSignals from './pages/GEOSignals';
import BlogIndex from './pages/BlogIndex';
import TopGEOAgencies from './pages/TopGEOAgencies';
import HubSpotAudit from './pages/HubSpotAudit';
import StateOfAISearchApril2026 from './pages/StateOfAISearchApril2026';
<<<<<<< HEAD
import Pricing from './pages/Pricing';
=======
import GEOAgencyIndia from './pages/GEOAgencyIndia';
>>>>>>> 1cfe87e (Add GEO agency Delhi/India page + location schema optimization)
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col antialiased selection:bg-emerald-500 selection:text-black">
      <Navbar scrolled={scrolled} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/ai-visibility" element={<AIVisibility />} />
          <Route path="/geo-resources" element={<GEOResources />} />
          <Route path="/ai-search-report-2026" element={<AIReport2026 />} />
          <Route path="/ai-glossary" element={<AIGlossary />} />
          <Route path="/geo-calculator" element={<GEOCalculator />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/top-7-geo-signals-2026" element={<GEOSignals />} />
          <Route path="/blog/top-geo-agencies-b2b-2026" element={<TopGEOAgencies />} />
          <Route path="/blog/hubspot-geo-audit-2026" element={<HubSpotAudit />} />
          <Route path="/blog/state-of-ai-search-april-2026" element={<StateOfAISearchApril2026 />} />
          <Route path="/geo-agency-delhi-india" element={<GEOAgencyIndia />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
