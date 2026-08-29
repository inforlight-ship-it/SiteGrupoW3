import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../styles/index.css';
import '../styles/detail.css';
import '../styles/v2-business.css';
import '../styles/case-pages.css';
import '../styles/v3-seo.css';
import '../styles/mobile-responsive.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
