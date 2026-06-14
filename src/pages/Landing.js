import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const modules = [
  { path: '/smartroute', label: 'SmartRoute AI', icon: '🗺️', color: '#1a9e7a', desc: 'Multi-modal journey planner across Metro, Bus, Train & Auto using live feeds' },
  { path: '/shesafe', label: 'SheSafe Shield', icon: '🛡️', color: '#e91e8c', desc: 'Women safety: SOS gesture, live location share & safe route suggestion' },
  { path: '/greenscore', label: 'GreenScore', icon: '🌿', color: '#4caf50', desc: 'CO₂ tracking per trip, rewards for choosing public transit over private cabs' },
  { path: '/fairfare', label: 'FairFare Engine', icon: '💰', color: '#ff9800', desc: 'Transparent, government-rate-based pricing — no surge, no hidden charges' },
  { path: '/livetransit', label: 'LiveTransit Hub', icon: '📡', color: '#2196f3', desc: 'Unified real-time tracking: MTC buses, Metro, local trains in one dashboard' },
  { path: '/driverpulse', label: 'DriverPulse', icon: '📊', color: '#9c27b0', desc: 'Driver earnings dashboard, dispute board, daily summary & incentive tracker' },
];

const stats = [
  { value: '1.4B+', label: 'People without reliable transit data' },
  { value: '68 min', label: 'Avg daily commute in metro cities' },
  { value: '23%', label: 'Women avoid late-night transit' },
  { value: '4.2x', label: 'Surge pricing spike at peak hours' },
];

function Landing() {
  const [count, setCount] = useState(0);
  const [hoveredModule, setHoveredModule] = useState(null);
  const words = ['Every Journey.', 'Every City.', 'Every Commuter.'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => (c + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#050a14' }}>

      {/* Hero */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 20px',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Animated grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(26,158,122,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,158,122,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        {/* Glows */}
        <div style={{
          position: 'absolute',
          width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(26,158,122,0.12) 0%, transparent 70%)',
          top: '40%', left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(233,30,140,0.07) 0%, transparent 70%)',
          top: '10%', left: '10%',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(33,150,243,0.07) 0%, transparent 70%)',
          bottom: '10%', right: '10%',
          pointerEvents: 'none',
        }} />

        {/* Badge */}
        <div style={{
          display: 'inline-block',
          padding: '6px 16px',
          background: 'rgba(26,158,122,0.1)',
          border: '1px solid rgba(26,158,122,0.4)',
          borderRadius: '20px',
          fontSize: '12px',
          color: '#1a9e7a',
          marginBottom: '32px',
          letterSpacing: '2px',
          position: 'relative',
          zIndex: 1,
        }}>⚡ OneJourney Mobility Hackathon 2026</div>

        {/* Main Title */}
        <h1 style={{
          fontSize: 'clamp(80px, 15vw, 160px)',
          fontWeight: '900',
          letterSpacing: '20px',
          background: 'linear-gradient(135deg, #ffffff 0%, #1a9e7a 60%, #0d6e54 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: '1',
          marginBottom: '16px',
          position: 'relative',
          zIndex: 1,
        }}>VEGA</h1>

        <p style={{
          fontSize: 'clamp(14px, 2.5vw, 20px)',
          color: 'rgba(255,255,255,0.4)',
          marginBottom: '8px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          position: 'relative',
          zIndex: 1,
        }}>Urban Mobility Super App</p>

        <p style={{
          fontSize: 'clamp(18px, 3vw, 28px)',
          color: '#1a9e7a',
          fontWeight: '700',
          marginBottom: '56px',
          minHeight: '40px',
          transition: 'all 0.5s ease',
          position: 'relative',
          zIndex: 1,
        }}>{words[count]}</p>

        <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          <Link to="/smartroute" style={{
            padding: '16px 44px',
            background: 'linear-gradient(135deg, #1a9e7a, #0d6e54)',
            borderRadius: '50px',
            fontSize: '16px',
            fontWeight: '700',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 0 40px rgba(26,158,122,0.4)',
            transition: 'all 0.3s ease',
          }}>Explore VEGA →</Link>

          <a href="#modules" style={{
            padding: '16px 44px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '50px',
            fontSize: '16px',
            fontWeight: '700',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.15)',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
          }}>See Modules</a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'rgba(255,255,255,0.2)',
          fontSize: '11px',
          letterSpacing: '2px',
          zIndex: 1,
        }}>
          <div style={{
            width: '1px', height: '60px',
            background: 'linear-gradient(to bottom, transparent, #1a9e7a)',
          }} />
          SCROLL
        </div>
      </div>

      {/* Stats */}
      <div style={{
        padding: '100px 40px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <p style={{
          textAlign: 'center',
          color: '#1a9e7a',
          letterSpacing: '4px',
          fontSize: '12px',
          marginBottom: '60px',
          textTransform: 'uppercase',
        }}>THE PROBLEM</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2px',
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              padding: '48px 32px',
              background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
              borderLeft: i === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              borderRight: '1px solid rgba(255,255,255,0.06)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '900',
                color: '#1a9e7a',
                marginBottom: '12px',
                letterSpacing: '-1px',
              }}>{stat.value}</div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.4)',
                lineHeight: '1.6',
                maxWidth: '160px',
                margin: '0 auto',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modules */}
      <div id="modules" style={{
        padding: '100px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{
            color: '#1a9e7a',
            letterSpacing: '4px',
            fontSize: '12px',
            marginBottom: '20px',
            textTransform: 'uppercase',
          }}>THE SOLUTION</p>
          <h2 style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: '900',
            lineHeight: '1.1',
            marginBottom: '20px',
          }}>6 Modules.<br />1 Unified App.</h2>
          <p style={{
            color: 'rgba(255,255,255,0.35)',
            fontSize: '18px',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}>
            India's cities need ONE unified mobility brain — not 12 disconnected apps.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2px',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {modules.map((mod, i) => (
            <Link
              key={i}
              to={mod.path}
              onMouseEnter={() => setHoveredModule(i)}
              onMouseLeave={() => setHoveredModule(null)}
              style={{
                padding: '40px',
                background: hoveredModule === i ? `rgba(255,255,255,0.04)` : 'transparent',
                borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'block',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
              }}>

              {/* Hover glow */}
              {hoveredModule === i && (
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '100%', height: '3px',
                  background: mod.color,
                }} />
              )}

              <div style={{ fontSize: '36px', marginBottom: '20px' }}>{mod.icon}</div>
              <div style={{
                fontSize: '11px',
                letterSpacing: '3px',
                color: mod.color,
                marginBottom: '10px',
                fontWeight: '700',
                textTransform: 'uppercase',
              }}>Module {String(i + 1).padStart(2, '0')}</div>
              <h3 style={{
                fontSize: '22px',
                fontWeight: '800',
                marginBottom: '14px',
                color: hoveredModule === i ? '#fff' : 'rgba(255,255,255,0.9)',
              }}>{mod.label}</h3>
              <p style={{
                color: 'rgba(255,255,255,0.4)',
                lineHeight: '1.7',
                fontSize: '14px',
                marginBottom: '28px',
              }}>{mod.desc}</p>
              <div style={{
                color: mod.color,
                fontSize: '13px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                opacity: hoveredModule === i ? 1 : 0.5,
                transition: 'all 0.3s ease',
              }}>
                Open Module
                <span style={{
                  transform: hoveredModule === i ? 'translateX(4px)' : 'translateX(0)',
                  transition: 'transform 0.3s ease',
                }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{
        padding: '120px 40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(26,158,122,0.1) 0%, transparent 70%)',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }} />
        <p style={{
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '4px',
          fontSize: '12px',
          marginBottom: '24px',
          textTransform: 'uppercase',
        }}>Team Craazco</p>
        <h2 style={{
          fontSize: 'clamp(32px, 6vw, 56px)',
          fontWeight: '900',
          marginBottom: '16px',
        }}>One App.<br />Every Journey.<br />Every Indian City.</h2>
        <p style={{
          color: 'rgba(255,255,255,0.3)',
          marginTop: '40px',
          fontSize: '13px',
          letterSpacing: '2px',
        }}>VEGA — OneJourney Mobility Hackathon 2026</p>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '32px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <div style={{
          fontSize: '20px',
          fontWeight: '900',
          letterSpacing: '6px',
          color: '#fff',
        }}>VEGA</div>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px' }}>
          Built by Team Craazco · Vivek Kumar · M Ankit · Nikhil Ranjan Sahoo
        </p>
      </div>
    </div>
  );
}

export default Landing;