import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { preloadRoute } from './route-pages';
import './tailwind.css';
import './public/fonts/fonts.css';
import './public/index.css';

async function start() {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Could not find root element to mount to');
  // Leave crawlable, readable HTML intact while the landing route loads.
  await preloadRoute(window.location.pathname);
  const app = <React.StrictMode><App /></React.StrictMode>;
  if (rootElement.hasChildNodes()) ReactDOM.hydrateRoot(rootElement, app);
  else ReactDOM.createRoot(rootElement).render(app);
}
void start();
