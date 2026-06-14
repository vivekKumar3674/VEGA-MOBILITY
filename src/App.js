import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SmartRoute from './pages/SmartRoute';
import SheSafe from './pages/SheSafe';
import GreenScore from './pages/GreenScore';
import FairFare from './pages/FairFare';
import LiveTransit from './pages/LiveTransit';
import DriverPulse from './pages/DriverPulse';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/smartroute" element={<SmartRoute />} />
        <Route path="/shesafe" element={<SheSafe />} />
        <Route path="/greenscore" element={<GreenScore />} />
        <Route path="/fairfare" element={<FairFare />} />
        <Route path="/livetransit" element={<LiveTransit />} />
        <Route path="/driverpulse" element={<DriverPulse />} />
      </Routes>
    </Router>
  );
}

export default App;