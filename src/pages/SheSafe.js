import React, { useState } from 'react';

const safeRoutes = [
  { name: 'Route A — Anna Salai Main Road', safety: 98, time: '12 min', stops: 'Passes Guindy Police Station & 2 PCR booths', color: '#16a34a' },
  { name: 'Route B — Mount Poonamallee Road', safety: 89, time: '9 min', stops: 'High foot traffic — bus stands & tea shops open', color: '#d97706' },
  { name: 'Route C — Kathipara Junction Shortcut', safety: 61, time: '6 min', stops: 'Isolated underpass — avoid after 9 PM', color: '#dc2626' },
];

const contacts = ['Amma 👩', 'Akka Divya 👧', 'Priya (Friend) 👩‍🦱'];

function SheSafe({ theme }) {
  const [sosActive, setSosActive] = useState(false);
  const [locationShared, setLocationShared] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const dark = theme === 'dark';

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
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px' }}>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#db2777', fontWeight: '700', marginBottom: '10px' }}>MODULE 02</p>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', color: 'var(--text)', marginBottom: '12px' }}>SheSafe Shield</h1>
          <p style={{ color: 'var(--text3)', fontSize: '15px', lineHeight: '1.7' }}>Real-time safety alerts, SOS & live location sharing for women commuters across Chennai.</p>
        </div>

        {/* SOS */}
        <div style={{
          background: sosActive ? (dark ? 'rgba(219,39,119,0.08)' : '#fff0f6') : 'var(--surface)',
          border: `1px solid ${sosActive ? '#db2777' : 'var(--border)'}`,
          borderRadius: '12px', padding: '40px', marginBottom: '20px',
          textAlign: 'center', boxShadow: 'var(--shadow)',
          transition: 'all 0.3s ease',
        }}>
          <p style={{ color: 'var(--text3)', marginBottom: '28px', fontSize: '13px' }}>Press button or shake phone 3 times to activate emergency SOS</p>
          <button onClick={handleSOS} style={{
            width: '120px', height: '120px', borderRadius: '50%',
            background: sosActive ? '#db2777' : (dark ? 'rgba(219,39,119,0.1)' : '#fff0f6'),
            border: '2px solid #db2777',
            color: sosActive ? '#fff' : '#db2777',
            fontSize: countdown ? '40px' : sosActive ? '13px' : '32px',
            fontWeight: '900', cursor: 'pointer',
            boxShadow: sosActive ? '0 0 0 8px rgba(219,39,119,0.2)' : 'none',
            transition: 'all 0.3s ease',
          }}>
            {countdown || (sosActive ? 'SENT! ✅' : '🆘')}
          </button>
          {sosActive && (
            <div style={{ marginTop: '24px' }}>
              <p style={{ color: '#db2777', fontWeight: '800', fontSize: '16px' }}>🚨 Emergency Alert Sent!</p>
              <p style={{ color: 'var(--text3)', fontSize: '13px', marginTop: '6px' }}>Amma, Akka Divya & Priya notified — live location shared on WhatsApp</p>
            </div>
          )}
        </div>

        {/* Safe Routes */}
        <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text)', marginBottom: '14px' }}>Safe Route Suggestions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          {safeRoutes.map((route, i) => (
            <div key={i} style={{ padding: '18px 20px', background: 'var(--surface)', border: `1px solid var(--border)`, borderLeft: `3px solid ${route.color}`, borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: 'var(--shadow)' }}>
              <div>
                <p style={{ fontWeight: '700', fontSize: '14px', color: 'var(--text)', marginBottom: '3px' }}>{route.name}</p>
                <p style={{ color: 'var(--text3)', fontSize: '12px' }}>{route.stops}</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '16px' }}>
                <div style={{ fontSize: '22px', fontWeight: '900', color: route.color }}>{route.safety}%</div>
                <div style={{ fontSize: '11px', color: 'var(--text3)' }}>{route.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Share */}
        <div style={{ padding: '24px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', marginBottom: '14px' }}>Live Location Sharing</h2>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {contacts.map((c, i) => (
              <div key={i} style={{ padding: '6px 14px', background: locationShared ? (dark ? 'rgba(219,39,119,0.15)' : '#fff0f6') : 'var(--bg2)', border: `1px solid ${locationShared ? '#db2777' : 'var(--border)'}`, borderRadius: '20px', fontSize: '13px', color: 'var(--text2)', transition: 'all 0.2s ease' }}>{c}</div>
            ))}
          </div>
          <button onClick={() => setLocationShared(!locationShared)} style={{ padding: '10px 24px', background: locationShared ? '#db2777' : 'transparent', border: '1px solid #db2777', borderRadius: '8px', color: locationShared ? '#fff' : '#db2777', fontWeight: '700', cursor: 'pointer', fontSize: '13px' }}>
            {locationShared ? '📍 Live Sharing Active — Stop' : '📍 Start Live Location Sharing'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SheSafe;