import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/smartroute', label: 'SmartRoute', color: '#1a9e7a' },
  { path: '/shesafe', label: 'SheSafe', color: '#e91e8c' },
  { path: '/greenscore', label: 'GreenScore', color: '#4caf50' },
  { path: '/fairfare', label: 'FairFare', color: '#ff9800' },
  { path: '/livetransit', label: 'LiveTransit', color: '#2196f3' },
  { path: '/driverpulse', label: 'DriverPulse', color: '#9c27b0' },
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
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '16px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(5,10,20,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(26,158,122,0.2)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '36px', height: '36px',
          background: 'linear-gradient(135deg, #1a9e7a, #0d6e54)',
          borderRadius: '8px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: '900', fontSize: '18px'
        }}>V</div>
        <span style={{ fontSize: '22px', fontWeight: '800', letterSpacing: '4px' }}>VEGA</span>
      </Link>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
        {navLinks.map(link => (
          <Link key={link.path} to={link.path} style={{
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: '600',
            color: location.pathname === link.path ? '#fff' : 'rgba(255,255,255,0.6)',
            background: location.pathname === link.path ? link.color : 'transparent',
            border: `1px solid ${location.pathname === link.path ? link.color : 'rgba(255,255,255,0.1)'}`,
            transition: 'all 0.2s ease',
          }}>{link.label}</Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;