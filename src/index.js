import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import * as te from 'tw-elements';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
