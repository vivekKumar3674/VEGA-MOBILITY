import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/smartroute', label: 'SmartRoute', color: '#16a34a' },
  { path: '/shesafe', label: 'SheSafe', color: '#db2777' },
  { path: '/greenscore', label: 'GreenScore', color: '#15803d' },
  { path: '/fairfare', label: 'FairFare', color: '#d97706' },
  { path: '/livetransit', label: 'LiveTransit', color: '#2563eb' },
  { path: '/driverpulse', label: 'DriverPulse', color: '#7c3aed' },
];

function getAutoTheme() {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 19 ? 'light' : 'dark';
}

export { getAutoTheme };

function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('vega-theme', next);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000,
      padding: '0 40px',
      height: '60px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'var(--nav-bg)',
      backdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.2s ease',
    }}>
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{
          width: '28px', height: '28px',
          background: 'var(--accent)',
          borderRadius: '6px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: '900', fontSize: '14px',
          color: theme === 'dark' ? '#020a06' : '#fff',
        }}>V</div>
        <span style={{ fontSize: '18px', fontWeight: '800', letterSpacing: '3px', color: 'var(--text)' }}>VEGA</span>
      </Link>

      {/* Nav Links */}
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {navLinks.map(link => {
          const active = location.pathname === link.path;
          return (
            <Link key={link.path} to={link.path} style={{
              padding: '5px 12px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: active ? '700' : '500',
              color: active ? link.color : 'var(--text2)',
              background: active ? (theme === 'dark' ? `${link.color}15` : `${link.color}10`) : 'transparent',
              transition: 'all 0.15s ease',
            }}>{link.label}</Link>
          );
        })}
      </div>

      {/* Theme Toggle */}
      <button onClick={toggleTheme} style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '6px 14px',
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '13px',
        fontWeight: '600',
        color: 'var(--text2)',
        transition: 'all 0.2s ease',
      }}>
        {theme === 'dark' ? '☀️ Day' : '🌙 Night'}
      </button>
    </nav>
  );
}

export default Navbar;