import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SmartRoute from './pages/SmartRoute';
import SheSafe from './pages/SheSafe';
import GreenScore from './pages/GreenScore';
import FairFare from './pages/FairFare';
import LiveTransit from './pages/LiveTransit';
import DriverPulse from './pages/DriverPulse';
import Navbar from './components/Navbar';

function getAutoTheme() {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 19 ? 'light' : 'dark';
}

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('vega-theme');
    const auto = getAutoTheme();
    const t = saved || auto;
    document.documentElement.setAttribute('data-theme', t);
    return t;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const saved = localStorage.getItem('vega-theme-manual');
      if (!saved) {
        const auto = getAutoTheme();
        setTheme(auto);
        document.documentElement.setAttribute('data-theme', auto);
      }
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Landing theme={theme} />} />
        <Route path="/smartroute" element={<SmartRoute theme={theme} />} />
        <Route path="/shesafe" element={<SheSafe theme={theme} />} />
        <Route path="/greenscore" element={<GreenScore theme={theme} />} />
        <Route path="/fairfare" element={<FairFare theme={theme} />} />
        <Route path="/livetransit" element={<LiveTransit theme={theme} />} />
        <Route path="/driverpulse" element={<DriverPulse theme={theme} />} />
      </Routes>
    </Router>
  );
}

export default App;