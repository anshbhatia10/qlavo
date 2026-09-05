/// <reference types="vite/client" />
import { lazy, type ComponentType } from 'react';
import Home from './pages/Home';

type PageModule = { default: ComponentType };
// Vite replaces SSR at transform time: eager on the server preserves the
// synchronous render() API; browser builds retain only dynamic page imports.
const serverPages = import.meta.env.SSR
  ? import.meta.glob<PageModule>(['./pages/*.tsx', '!./pages/Home.tsx'], { eager: true })
  : {};
const loaders = import.meta.glob<PageModule>(['./pages/*.tsx', '!./pages/Home.tsx']);
const loaded: Record<string, ComponentType> = { Home };
const pending: Record<string, Promise<void>> = {};
const lazyPages: Record<string, ComponentType> = {};

export const marketingRoutes = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
  ['/pricing', 'Pricing'],
  ['/partners', 'Partners'],
  ['/sample-deliverable', 'SampleDeliverable'],
  ['/ai-visibility', 'AIVisibility'],
  ['/geo-resources', 'GEOResources'],
  ['/ai-search-report-2026', 'AIReport2026'],
  ['/ai-glossary', 'AIGlossary'],
  ['/geo-calculator', 'GEOCalculator'],
  ['/blog', 'BlogIndex'],
  ['/top-7-geo-signals-2026', 'GEOSignals'],
  ['/blog/7-signals-ai-engines-brand-exists', 'GEOSignals7'],
  ['/blog/top-geo-agencies-b2b-2026', 'TopGEOAgencies'],
  ['/blog/hubspot-geo-audit-2026', 'HubSpotAudit'],
  ['/blog/state-of-ai-search-april-2026', 'StateOfAISearchApril2026'],
  ['/geo-agency-delhi-india', 'GEOAgencyIndia'],
  ['/hire-geo-agency', 'HireGEOAgency'],
  ['/what-is-generative-engine-optimization', 'GEOGuide'],
  ['/geo-pricing-cost-guide-2026', 'GEOPricingGuide'],
  ['/geo-vs-seo-vs-aeo-differences', 'GEOvsSEO'],
  ['/geo-statistics-2026', 'GEOStatistics'],
  ['/reddit/best-geo-tools', 'RedditBestGEOTools'],
  ['/reddit/geo-vs-seo', 'RedditGeoVsSeo'],
  ['/reddit/get-cited-chatgpt', 'RedditGetCitedChatGPT'],
  ['/reddit/geo-pricing', 'RedditGeoPricing'],
  ['/reddit/best-geo-agencies', 'RedditBestGeoAgencies'],
  ['/reddit/is-geo-worth-it', 'RedditIsGeoWorthIt'],
  ['/reddit/ai-visibility-audit', 'RedditAIVisibilityAudit'],
] as const;

export function pageComponent(name: string): ComponentType {
  if (loaded[name]) return loaded[name];
  const key = `./pages/${name}.tsx`;
  if (import.meta.env.SSR) return serverPages[key].default;
  return lazyPages[name] ??= lazy(loaders[key]);
}

/** Resolve only the landing page before hydrating its prerendered markup. */
export async function preloadRoute(pathname: string): Promise<void> {
  const path = pathname.replace(/\/+$/, '') || '/';
  const name = marketingRoutes.find(([route]) => route === path)?.[1];
  if (!name || loaded[name] || import.meta.env.SSR) return;
  await (pending[name] ??= loaders[`./pages/${name}.tsx`]().then(module => {
    loaded[name] = module.default;
  }));
}

export const editorialRoute = (pathname: string): boolean => ![
  '/', '/about', '/contact', '/pricing', '/partners', '/sample-deliverable',
  '/ai-visibility', '/geo-calculator', '/geo-agency-delhi-india', '/hire-geo-agency',
].includes(pathname.replace(/\/+$/, '') || '/');
