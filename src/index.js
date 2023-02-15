import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/style/index.scss';
import App from './app/App';

import { ParallaxProvider } from 'react-scroll-parallax';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);

