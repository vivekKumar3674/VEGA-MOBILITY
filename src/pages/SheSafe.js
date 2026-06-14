import React, { useState } from 'react';

function SheSafe() {
  const [sosActive, setSosActive] = useState(false);
  const [locationShared, setLocationShared] = useState(false);

  const handleSOS = () => {
    setSosActive(true);
    setTimeout(() => setSosActive(false), 5000);
  };

  const safeRoutes = [
    { name: 'Route A — Well Lit Path', safety: 98, time: '12 min', stops: 'Passes 3 police booths' },
    { name: 'Route B — Busy Streets', safety: 89, time: '9 min', stops: 'High foot traffic area' },
    { name: 'Route C — Shortcut', safety: 61, time: '6 min', stops: 'Isolated stretch — avoid at night' },
  ];

  const contacts = ['Mom 👩', 'Sister 👧', 'Friend Priya 👩‍🦱'];

  return (
    <div style={{ minHeight: '100vh', background: '#050a14', paddingTop: '100px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>

        <div style={{ marginBottom: '48px' }}>
          <p style={{ color: '#e91e8c', letterSpacing: '4px', fontSize: '12px', marginBottom: '12px' }}>MODULE 02</p>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: '900', marginBottom: '16px' }}>SheSafe Shield</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: '1.7' }}>
            Real-time safety alerts, SOS gestures, live location sharing and safe route suggestions for women commuters.
          </p>
        </div>

        {/* SOS Button */}
        <div style={{
          background: sosActive ? 'rgba(233,30,140,0.15)' : 'rgba(255,255,255,0.03)',
          border: `2px solid ${sosActive ? '#e91e8c' : 'rgba(233,30,140,0.3)'}`,
          borderRadius: '24px',
          padding: '40px',
          marginBottom: '32px',
          textAlign: 'center',
          transition: 'all 0.3s ease',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '24px', fontSize: '14px' }}>
            Hold button or shake phone 3 times to activate SOS
          </p>
          <button
            onClick={handleSOS}
            style={{
              width: '140px', height: '140px',
              borderRadius: '50%',
              background: sosActive
                ? 'linear-gradient(135deg, #e91e8c, #c2185b)'
                : 'rgba(233,30,140,0.15)',
              border: `3px solid #e91e8c`,
              color: '#fff',
              fontSize: sosActive ? '14px' : '32px',
              fontWeight: '900',
              cursor: 'pointer',
              boxShadow: sosActive ? '0 0 60px rgba(233,30,140,0.8)' : '0 0 30px rgba(233,30,140,0.2)',
              transition: 'all 0.3s ease',
              animation: sosActive ? 'pulse 0.5s infinite' : 'none',
            }}>
            {sosActive ? 'ALERT SENT!' : '🆘'}
          </button>

          {sosActive && (
            <div style={{ marginTop: '24px' }}>
              <p style={{ color: '#e91e8c', fontWeight: '700', fontSize: '16px' }}>
                ✅ Emergency contacts notified in 3 seconds
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginTop: '8px' }}>
                Live location shared with: Mom, Sister, Priya
              </p>
            </div>
          )}
        </div>

        {/* Safe Routes */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '20px' }}>Safe Route Suggestions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {safeRoutes.map((route, i) => (
              <div key={i} style={{
                padding: '20px 24px',
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${route.safety > 90 ? 'rgba(76,175,80,0.4)' : route.safety > 70 ? 'rgba(255,152,0,0.4)' : 'rgba(244,67,54,0.4)'}`,
                borderRadius: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <p style={{ fontWeight: '700', marginBottom: '4px' }}>{route.name}</p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>{route.stops}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: '22px', fontWeight: '900',
                    color: route.safety > 90 ? '#4caf50' : route.safety > 70 ? '#ff9800' : '#f44336',
                  }}>{route.safety}%</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{route.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Location */}
        <div style={{
          padding: '24px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px',
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px' }}>Live Location Sharing</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {contacts.map((c, i) => (
              <div key={i} style={{
                padding: '8px 16px',
                background: locationShared ? 'rgba(233,30,140,0.2)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${locationShared ? '#e91e8c' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '20px',
                fontSize: '14px',
              }}>{c}</div>
            ))}
          </div>
          <button
            onClick={() => setLocationShared(!locationShared)}
            style={{
              padding: '12px 28px',
              background: locationShared ? '#e91e8c' : 'transparent',
              border: '1px solid #e91e8c',
              borderRadius: '10px',
              color: '#fff',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '14px',
            }}>
            {locationShared ? '📍 Location Active — Stop Sharing' : '📍 Start Live Sharing'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SheSafe;