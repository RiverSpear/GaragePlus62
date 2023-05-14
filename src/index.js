import React from 'react';
import ReactDOM from 'react-dom/client';
import { generateSitemap } from 'react-sitemap-generator';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

generateSitemap({
  baseUrl: 'https://garage62.co/',
  excludedPaths: ['/404'],
  pagesConfig: [
    {
      priority: '0.7',
      changefreq: 'monthly',
      path: '/',
    },
    {
      priority: '0.5',
      changefreq: 'monthly',
      path: '/faq',
    },
    {
      priority: '0.5',
      changefreq: 'monthly',
      path: '/lokasi',
    },
    {
      priority: '0.5',
      changefreq: 'monthly',
      path: '/servis',
    },
    {
      priority: '0.5',
      changefreq: 'monthly',
      path: '/servis/:slug',
    },
    {
      priority: '0.5',
      changefreq: 'monthly',
      path: '/kontak',
    },
    {
      priority: '0.5',
      changefreq: 'monthly',
      path: '/testimoni',
    },
  ],
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


