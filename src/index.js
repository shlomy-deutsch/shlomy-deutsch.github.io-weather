import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router base="https://weather.github.io/shlomy-deutsch-weather.github.io/">
    <App />
    </Router>
);


reportWebVitals();
