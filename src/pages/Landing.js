import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const modules = [
  { path: '/smartroute', label: 'SmartRoute AI', icon: '🗺️', color: '#4ade80', bg: 'rgba(74,222,128,0.08)', desc: 'Multi-modal journey planner across Metro, Bus, Train & Auto' },
  { path: '/shesafe', label: 'SheSafe Shield', icon: '🛡️', color: '#f472b6', bg: 'rgba(244,114,182,0.08)', desc: 'SOS alerts, safe routes & live location sharing for women' },
  { path: '/greenscore', label: 'GreenScore', icon: '🌿', color: '#86efac', bg: 'rgba(134,239,172,0.08)', desc: 'CO₂ tracking per trip with GreenCoin rewards' },
  { path: '/fairfare', label: 'FairFare Engine', icon: '💰', color: '#fbbf24', bg: 'rgba(251,191,36,0.08)', desc: 'Government-rate pricing — no surge, no hidden charges' },
  { path: '/livetransit', label: 'LiveTransit Hub', icon: '📡', color: '#60a5fa', bg: 'rgba(96,165,250,0.08)', desc: 'Real-time bus, metro & train tracking unified' },
  { path: '/driverpulse', label: 'DriverPulse', icon: '📊', color: '#c084fc', bg: 'rgba(192,132,252,0.08)', desc: 'Earnings dashboard, disputes & incentive tracking' },
];

const stats = [
  { value: '1.4B+', label: 'Without reliable transit data', icon: '👥' },
  { value: '68 min', label: 'Avg daily commute wasted', icon: '⏱️' },
  { value: '23%', label: 'Women avoid late-night transit', icon: '🛡️' },
  { value: '4.2x', label: 'Surge pricing at peak hours', icon: '💸' },
];

const words = ['Every Journey.', 'Every City.', 'Every Commuter.', 'Every Indian.'];

function FlowOrb({ size, color, top, left, delay, duration }) {
  return (
    <div style={{
      position: 'absolute',
      width: size, height: size,
      borderRadius: '50%',
      background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`,
      top, left,
      animation: `flow ${duration}s ease-in-out ${delay}s infinite`,
      pointerEvents: 'none',
      filter: 'blur(40px)',
    }} />
  );
}

function Landing() {
  const [count, setCount] = useState(0);
  const [hoveredModule, setHoveredModule] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setCount(c => (c + 1) % words.length), 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#020a06' }}>

      {/* HERO */}
      <div ref={heroRef} style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '0 24px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Flow Orbs */}
        <FlowOrb size="500px" color="rgba(74,222,128,0.18)" top="10%" left="60%" delay={0} duration={8} />
        <FlowOrb size="400px" color="rgba(34,197,94,0.12)" top="50%" left="5%" delay={2} duration={10} />
        <FlowOrb size="300px" color="rgba(134,239,172,0.15)" top="70%" left="70%" delay={4} duration={7} />
        <FlowOrb size="250px" color="rgba(74,222,128,0.1)" top="20%" left="20%" delay={1} duration={12} />

        {/* Mouse follower */}
        <div style={{
          position: 'fixed',
          width: '300px', height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)',
          left: mousePos.x - 150, top: mousePos.y - 150,
          pointerEvents: 'none', zIndex: 0,
          transition: 'left 0.3s ease, top 0.3s ease',
        }} />

        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
        }} />

        {/* Badge */}
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '8px 20px',
          background: 'rgba(74,222,128,0.08)',
          border: '1px solid rgba(74,222,128,0.3)',
          borderRadius: '30px',
          fontSize: '12px', color: '#4ade80',
          marginBottom: '40px', letterSpacing: '2px',
          backdropFilter: 'blur(10px)',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#4ade80',
            boxShadow: '0 0 8px #4ade80',
            animation: 'pulse 2s infinite',
            display: 'inline-block',
          }} />
          ONEJOURNEY MOBILITY HACKATHON 2026
        </div>

        {/* Title */}
        <h1 style={{
          position: 'relative', zIndex: 2,
          fontSize: 'clamp(100px, 18vw, 200px)',
          fontWeight: '900', letterSpacing: '24px',
          background: 'linear-gradient(135deg, #ffffff 0%, #4ade80 40%, #22c55e 70%, #86efac 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          animation: 'shimmer 4s linear infinite',
          lineHeight: '0.9', marginBottom: '24px',
        }}>VEGA</h1>

        <p style={{
          position: 'relative', zIndex: 2,
          fontSize: 'clamp(12px, 2vw, 16px)',
          color: 'rgba(255,255,255,0.35)',
          letterSpacing: '6px', textTransform: 'uppercase',
          marginBottom: '12px',
        }}>Urban Mobility Super App</p>

        <div style={{
          position: 'relative', zIndex: 2,
          fontSize: 'clamp(20px, 3.5vw, 32px)',
          fontWeight: '700', color: '#4ade80',
          marginBottom: '60px', minHeight: '48px',
          textShadow: '0 0 30px rgba(74,222,128,0.5)',
        }}>{words[count]}</div>

        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center',
        }}>
          <Link to="/smartroute" style={{
            padding: '18px 48px',
            background: 'linear-gradient(135deg, #4ade80, #16a34a)',
            borderRadius: '50px', fontSize: '16px', fontWeight: '700',
            color: '#020a06', border: 'none', cursor: 'pointer',
            boxShadow: '0 0 40px rgba(74,222,128,0.4), 0 0 80px rgba(74,222,128,0.15)',
            transition: 'all 0.3s ease',
            animation: 'float 3s ease-in-out infinite',
          }}>Explore VEGA →</Link>

          <a href="#modules" style={{
            padding: '18px 48px',
            background: 'rgba(74,222,128,0.06)',
            borderRadius: '50px', fontSize: '16px', fontWeight: '700',
            color: '#4ade80', border: '1px solid rgba(74,222,128,0.25)',
            cursor: 'pointer', backdropFilter: 'blur(10px)',
          }}>See Modules</a>
        </div>

        {/* Scroll */}
        <div style={{
          position: 'absolute', bottom: '40px', zIndex: 2,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          color: 'rgba(255,255,255,0.2)', fontSize: '10px', letterSpacing: '3px',
        }}>
          <div style={{
            width: '1px', height: '50px',
            background: 'linear-gradient(to bottom, transparent, #4ade80)',
            animation: 'pulse 2s infinite',
          }} />
          SCROLL
        </div>
      </div>

      {/* STATS */}
      <div style={{ padding: '120px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{ color: '#4ade80', letterSpacing: '4px', fontSize: '12px', marginBottom: '16px' }}>THE CRISIS</p>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900' }}>
            India's Urban Mobility is <span style={{ color: '#4ade80' }}>Broken</span>
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              padding: '40px 32px',
              background: 'rgba(74,222,128,0.04)',
              border: '1px solid rgba(74,222,128,0.12)',
              borderRadius: '24px',
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: 'linear-gradient(90deg, transparent, #4ade80, transparent)',
              }} />
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{stat.icon}</div>
              <div style={{
                fontSize: '44px', fontWeight: '900', color: '#4ade80',
                marginBottom: '8px', textShadow: '0 0 20px rgba(74,222,128,0.3)',
              }}>{stat.value}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.6' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MODULES */}
      <div id="modules" style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{ color: '#4ade80', letterSpacing: '4px', fontSize: '12px', marginBottom: '16px' }}>THE SOLUTION</p>
          <h2 style={{ fontSize: 'clamp(32px, 6vw, 60px)', fontWeight: '900', lineHeight: '1.1' }}>
            6 Modules.<br />
            <span style={{ color: '#4ade80' }}>1 Unified Brain.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '20px',
        }}>
          {modules.map((mod, i) => (
            <Link key={i} to={mod.path}
              onMouseEnter={() => setHoveredModule(i)}
              onMouseLeave={() => setHoveredModule(null)}
              style={{
                padding: '36px',
                background: hoveredModule === i ? mod.bg : 'rgba(255,255,255,0.02)',
                border: `1px solid ${hoveredModule === i ? mod.color + '40' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: '24px',
                cursor: 'pointer', transition: 'all 0.35s ease',
                display: 'block', textDecoration: 'none',
                position: 'relative', overflow: 'hidden',
                transform: hoveredModule === i ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hoveredModule === i ? `0 20px 60px ${mod.color}20` : 'none',
              }}>

              {hoveredModule === i && (
                <>
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                    background: `linear-gradient(90deg, transparent, ${mod.color}, transparent)`,
                  }} />
                  <div style={{
                    position: 'absolute', top: '-50%', left: '-50%',
                    width: '200%', height: '200%',
                    background: `radial-gradient(circle at center, ${mod.color}08 0%, transparent 60%)`,
                    pointerEvents: 'none',
                  }} />
                </>
              )}

              <div style={{ fontSize: '40px', marginBottom: '20px', animation: hoveredModule === i ? 'float 2s ease-in-out infinite' : 'none' }}>{mod.icon}</div>
              <div style={{
                fontSize: '10px', letterSpacing: '3px', color: mod.color,
                marginBottom: '10px', fontWeight: '700',
              }}>MODULE {String(i + 1).padStart(2, '0')}</div>
              <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '12px' }}>{mod.label}</h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: '1.7', fontSize: '14px', marginBottom: '24px' }}>{mod.desc}</p>
              <div style={{
                color: mod.color, fontSize: '13px', fontWeight: '700',
                display: 'flex', alignItems: 'center', gap: '6px',
                transform: hoveredModule === i ? 'translateX(6px)' : 'translateX(0)',
                transition: 'transform 0.3s ease',
              }}>Open Module →</div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        padding: '140px 40px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <FlowOrb size="600px" color="rgba(74,222,128,0.1)" top="0%" left="30%" delay={0} duration={10} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '4px', fontSize: '12px', marginBottom: '24px' }}>TEAM CRAAZCO</p>
          <h2 style={{
            fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: '900', lineHeight: '1.1',
            marginBottom: '24px',
          }}>
            One App.<br />
            <span style={{
              background: 'linear-gradient(135deg, #4ade80, #22c55e, #86efac)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Every Journey.</span><br />
            Every Indian City.
          </h2>
          <Link to="/smartroute" style={{
            display: 'inline-block', marginTop: '32px',
            padding: '20px 60px',
            background: 'linear-gradient(135deg, #4ade80, #16a34a)',
            borderRadius: '50px', fontSize: '18px', fontWeight: '800',
            color: '#020a06',
            boxShadow: '0 0 60px rgba(74,222,128,0.35)',
          }}>Launch VEGA →</Link>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: '1px solid rgba(74,222,128,0.08)',
        padding: '32px 40px',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '16px',
      }}>
        <span style={{
          fontSize: '22px', fontWeight: '900', letterSpacing: '6px',
          background: 'linear-gradient(135deg, #fff, #4ade80)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>VEGA</span>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px' }}>
          Vivek Kumar · M Ankit · Nikhil Ranjan Sahoo · Team Craazco 2026
        </p>
      </div>
    </div>
  );
}

export default Landing;