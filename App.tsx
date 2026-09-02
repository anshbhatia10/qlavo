import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import GEOSignals7 from './pages/GEOSignals7';
import BlogIndex from './pages/BlogIndex';
import TopGEOAgencies from './pages/TopGEOAgencies';
import HubSpotAudit from './pages/HubSpotAudit';
import StateOfAISearchApril2026 from './pages/StateOfAISearchApril2026';
import Pricing from './pages/Pricing';
import GEOAgencyIndia from './pages/GEOAgencyIndia';
import HireGEOAgency from './pages/HireGEOAgency';
import GEOGuide from './pages/GEOGuide';
import GEOPricingGuide from './pages/GEOPricingGuide';
import GEOvsSEO from './pages/GEOvsSEO';
import GEOStatistics from './pages/GEOStatistics';
import RedditBestGEOTools from './pages/RedditBestGEOTools';
import RedditGeoVsSeo from './pages/RedditGeoVsSeo';
import RedditGetCitedChatGPT from './pages/RedditGetCitedChatGPT';
import RedditGeoPricing from './pages/RedditGeoPricing';
import RedditBestGeoAgencies from './pages/RedditBestGeoAgencies';
import RedditIsGeoWorthIt from './pages/RedditIsGeoWorthIt';
import RedditAIVisibilityAudit from './pages/RedditAIVisibilityAudit';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';

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
      <CursorGlow />
      <Navbar scrolled={scrolled} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

/** Route tree shared by the browser app and the build-time prerender. */
export const AppRoutes: React.FC = () => {
  return (
    <>
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
          <Route path="/blog/7-signals-ai-engines-brand-exists" element={<GEOSignals7 />} />
          <Route path="/blog/top-geo-agencies-b2b-2026" element={<TopGEOAgencies />} />
          <Route path="/blog/hubspot-geo-audit-2026" element={<HubSpotAudit />} />
          <Route path="/blog/state-of-ai-search-april-2026" element={<StateOfAISearchApril2026 />} />
          <Route path="/geo-agency-delhi-india" element={<GEOAgencyIndia />} />
          <Route path="/hire-geo-agency" element={<HireGEOAgency />} />
          <Route path="/what-is-generative-engine-optimization" element={<GEOGuide />} />
          <Route path="/geo-pricing-cost-guide-2026" element={<GEOPricingGuide />} />
          <Route path="/geo-vs-seo-vs-aeo-differences" element={<GEOvsSEO />} />
          <Route path="/geo-statistics-2026" element={<GEOStatistics />} />
          {/* Reddit Intercept Pages — target LLM "[topic] reddit" searches */}
          <Route path="/reddit/best-geo-tools" element={<RedditBestGEOTools />} />
          <Route path="/reddit/geo-vs-seo" element={<RedditGeoVsSeo />} />
          <Route path="/reddit/get-cited-chatgpt" element={<RedditGetCitedChatGPT />} />
          <Route path="/reddit/geo-pricing" element={<RedditGeoPricing />} />
          <Route path="/reddit/best-geo-agencies" element={<RedditBestGeoAgencies />} />
          <Route path="/reddit/is-geo-worth-it" element={<RedditIsGeoWorthIt />} />
          <Route path="/reddit/ai-visibility-audit" element={<RedditAIVisibilityAudit />} />
        </Routes>
      </Layout>
    </>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
