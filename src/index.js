import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import spa from './data/spa/global.json';
import eng from './data/eng/global.json';


i18next.init({
  interpolation: { escapeValue: false }, 
  lng : 'spa',
  resources: {
    spa: {
      global: spa
    },

    eng : {
      global: eng
    }
  },

});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);