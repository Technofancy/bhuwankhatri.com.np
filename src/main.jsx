import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import './i18n'; // This import initializes i18next
import Loading from './components/ui/Loading'; // A simple loading fallback to show while translations are loading

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <React.Suspense fallback={<Loading />}>
        <App />
      </React.Suspense>
    </HelmetProvider>
  </React.StrictMode>
);