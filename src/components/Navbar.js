import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/smartroute', label: 'SmartRoute', color: '#4ade80' },
  { path: '/shesafe', label: 'SheSafe', color: '#f472b6' },
  { path: '/greenscore', label: 'GreenScore', color: '#86efac' },
  { path: '/fairfare', label: 'FairFare', color: '#fbbf24' },
  { path: '/livetransit', label: 'LiveTransit', color: '#60a5fa' },
  { path: '/driverpulse', label: 'DriverPulse', color: '#c084fc' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000,
      padding: '14px 40px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(2,10,6,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(74,222,128,0.15)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '38px', height: '38px',
          background: 'linear-gradient(135deg, #4ade80, #16a34a)',
          borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: '900', fontSize: '20px',
          boxShadow: '0 0 20px rgba(74,222,128,0.4)',
        }}>V</div>
        <span style={{
          fontSize: '22px', fontWeight: '900', letterSpacing: '6px',
          background: 'linear-gradient(135deg, #fff, #4ade80)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>VEGA</span>
      </Link>

      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
        {navLinks.map(link => (
          <Link key={link.path} to={link.path} style={{
            padding: '7px 16px', borderRadius: '20px',
            fontSize: '13px', fontWeight: '600',
            color: location.pathname === link.path ? '#020a06' : 'rgba(255,255,255,0.55)',
            background: location.pathname === link.path
              ? link.color
              : 'rgba(255,255,255,0.04)',
            border: `1px solid ${location.pathname === link.path ? link.color : 'rgba(255,255,255,0.08)'}`,
            transition: 'all 0.25s ease',
            boxShadow: location.pathname === link.path ? `0 0 16px ${link.color}60` : 'none',
          }}>{link.label}</Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;