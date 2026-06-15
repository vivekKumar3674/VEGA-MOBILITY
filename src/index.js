import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function getAutoTheme() {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 19 ? 'light' : 'dark';
}

const saved = localStorage.getItem('vega-theme');
const theme = saved || getAutoTheme();
document.documentElement.setAttribute('data-theme', theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);