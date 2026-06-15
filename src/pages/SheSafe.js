import React, { useState } from 'react';

const safeRoutes = [
  { name: 'Route A — Well Lit Path', safety: 98, time: '12 min', stops: 'Passes 3 police booths', color: '#4ade80' },
  { name: 'Route B — Busy Streets', safety: 89, time: '9 min', stops: 'High foot traffic area', color: '#fbbf24' },
  { name: 'Route C — Shortcut', safety: 61, time: '6 min', stops: 'Isolated stretch — avoid at night', color: '#f87171' },
];

const contacts = ['Mom 👩', 'Sister 👧', 'Priya 👩‍🦱'];

function SheSafe() {
  const [sosActive, setSosActive] = useState(false);
  const [locationShared, setLocationShared] = useState(false);
  const [countdown, setCountdown] = useState(null);

  const handleSOS = () => {
    let c = 3;
    setCountdown(c);
    const timer = setInterval(() => {
      c--;
      setCountdown(c);
      if (c === 0) {
        clearInterval(timer);
        setCountdown(null);
        setSosActive(true);
        setTimeout(() => setSosActive(false), 5000);
      }
    }, 1000);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#020a06', paddingTop: '100px' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 70%)', top: '20%', right: '10%', animation: 'flow 8s ease-in-out infinite', filter: 'blur(40px)' }} />
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 24px', position: 'relative', zIndex: 1 }}>
        <p style={{ color: '#f472b6', letterSpacing: '4px', fontSize: '11px', marginBottom: '12px' }}>MODULE 02</p>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: '900', marginBottom: '16px', background: 'linear-gradient(135deg, #fff, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SheSafe Shield</h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '16px', lineHeight: '1.7', marginBottom: '48px' }}>Real-time safety alerts, SOS, live location sharing for women commuters.</p>

        {/* SOS */}
        <div style={{
          background: sosActive ? 'rgba(244,114,182,0.1)' : 'rgba(255,255,255,0.02)',
          border: `1px solid ${sosActive ? '#f472b6' : 'rgba(244,114,182,0.2)'}`,
          borderRadius: '28px', padding: '48px', marginBottom: '28px',
          textAlign: 'center', transition: 'all 0.4s ease',
          backdropFilter: 'blur(20px)',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '32px', fontSize: '14px' }}>
            Press & hold or shake phone 3x to activate emergency SOS
          </p>

          <div style={{ position: 'relative', display: 'inline-block' }}>
            {sosActive && (
              <>
                <div style={{ position: 'absolute', inset: '-20px', borderRadius: '50%', border: '2px solid #f472b6', animation: 'ripple 1.5s ease-out infinite' }} />
                <div style={{ position: 'absolute', inset: '-40px', borderRadius: '50%', border: '2px solid #f472b6', animation: 'ripple 1.5s ease-out 0.5s infinite' }} />
              </>
            )}
            <button onClick={handleSOS} style={{
              width: '150px', height: '150px', borderRadius: '50%',
              background: sosActive ? 'linear-gradient(135deg, #f472b6, #db2777)' : countdown ? 'rgba(244,114,182,0.3)' : 'rgba(244,114,182,0.1)',
              border: '3px solid #f472b6',
              color: '#fff', fontSize: countdown ? '48px' : sosActive ? '14px' : '36px',
              fontWeight: '900', cursor: 'pointer',
              boxShadow: sosActive ? '0 0 80px rgba(244,114,182,0.8)' : '0 0 30px rgba(244,114,182,0.2)',
              transition: 'all 0.3s ease',
            }}>
              {countdown || (sosActive ? 'SENT! ✅' : '🆘')}
            </button>
          </div>

          {sosActive && (
            <div style={{ marginTop: '32px', animation: 'fadeUp 0.5s ease' }}>
              <p style={{ color: '#f472b6', fontWeight: '800', fontSize: '18px' }}>🚨 Emergency Alert Sent!</p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', marginTop: '8px' }}>Mom, Sister & Priya notified with live location</p>
            </div>
          )}
        </div>

        {/* Safe Routes */}
        <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '16px' }}>Safe Route Suggestions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
          {safeRoutes.map((route, i) => (
            <div key={i} style={{
              padding: '20px 24px',
              background: 'rgba(255,255,255,0.02)',
              border: `1px solid ${route.color}30`,
              borderRadius: '18px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <div>
                <p style={{ fontWeight: '700', marginBottom: '4px' }}>{route.name}</p>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px' }}>{route.stops}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '24px', fontWeight: '900', color: route.color }}>{route.safety}%</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>{route.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Share */}
        <div style={{ padding: '28px', background: 'rgba(244,114,182,0.04)', border: '1px solid rgba(244,114,182,0.15)', borderRadius: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px' }}>Live Location Sharing</h2>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {contacts.map((c, i) => (
              <div key={i} style={{
                padding: '8px 18px',
                background: locationShared ? 'rgba(244,114,182,0.15)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${locationShared ? '#f472b6' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '20px', fontSize: '14px',
                transition: 'all 0.3s ease',
              }}>{c}</div>
            ))}
          </div>
          <button onClick={() => setLocationShared(!locationShared)} style={{
            padding: '13px 32px',
            background: locationShared ? 'linear-gradient(135deg, #f472b6, #db2777)' : 'transparent',
            border: '1px solid #f472b6', borderRadius: '12px',
            color: '#fff', fontWeight: '700', cursor: 'pointer', fontSize: '14px',
            boxShadow: locationShared ? '0 0 20px rgba(244,114,182,0.3)' : 'none',
          }}>
            {locationShared ? '📍 Live — Stop Sharing' : '📍 Start Live Sharing'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SheSafe;