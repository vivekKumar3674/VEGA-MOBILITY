import React, { useState } from 'react';

const routes = [
  {
    type: 'Fastest', time: '32 min', cost: '₹28', co2: '0.8 kg',
    steps: ['🚶 Walk 4 min to Guindy Metro Station', '🚇 Metro: Guindy → Chennai Central (18 min)', '🚌 MTC 21C: Park Town → Destination (10 min)'],
    color: '#16a34a',
  },
  {
    type: 'Cheapest', time: '48 min', cost: '₹12', co2: '0.5 kg',
    steps: ['🚶 Walk 3 min to Guindy Bus Stop', '🚌 MTC 5D: Guindy → Koyambedu (30 min)', '🚌 MTC 15B: Koyambedu → Anna Nagar (15 min)'],
    color: '#2563eb',
  },
  {
    type: 'Greenest', time: '40 min', cost: '₹20', co2: '0.2 kg',
    steps: ['🚴 Cycle 6 min to St. Thomas Mount Metro', '🚇 Metro: St. Thomas Mount → Chennai Central (24 min)', '🚶 Walk 10 min to Parry\'s Corner'],
    color: '#15803d',
  },
];

function SmartRoute({ theme }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [searched, setSearched] = useState(false);
  const [selected, setSelected] = useState(0);
  const dark = theme === 'dark';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px' }}>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: 'var(--accent)', fontWeight: '700', marginBottom: '10px' }}>MODULE 01</p>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', color: 'var(--text)', marginBottom: '12px' }}>SmartRoute AI</h1>
          <p style={{ color: 'var(--text3)', fontSize: '15px', lineHeight: '1.7' }}>AI-powered multi-modal journey planner across Chennai Metro, MTC Bus, MRTS & Auto.</p>
        </div>

        {/* Search */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginBottom: '28px', boxShadow: 'var(--shadow)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }} />
              <input value={from} onChange={e => setFrom(e.target.value)}
                placeholder="From: e.g. Guindy, Tambaram, T. Nagar"
                style={{ width: '100%', padding: '13px 13px 13px 34px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontSize: '14px', outline: 'none' }} />
            </div>
            <div style={{ width: '1px', height: '12px', background: 'var(--border)', marginLeft: '18px' }} />
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', borderRadius: '3px', background: '#db2777' }} />
              <input value={to} onChange={e => setTo(e.target.value)}
                placeholder="To: e.g. Chennai Central, Koyambedu, Anna Nagar"
                style={{ width: '100%', padding: '13px 13px 13px 34px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontSize: '14px', outline: 'none' }} />
            </div>
            <button onClick={() => { if (from && to) setSearched(true); }} style={{ padding: '13px', background: 'var(--accent)', border: 'none', borderRadius: '8px', color: dark ? '#020a06' : '#fff', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }}>
              Find Best Routes
            </button>
          </div>
        </div>

        {/* Results */}
        {searched && (
          <div>
            <p style={{ color: 'var(--text3)', fontSize: '12px', marginBottom: '16px' }}>
              3 routes found · <strong style={{ color: 'var(--text)' }}>{from}</strong> → <strong style={{ color: 'var(--text)' }}>{to}</strong>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {routes.map((route, i) => (
                <div key={i} onClick={() => setSelected(i)} style={{
                  background: 'var(--surface)', border: `1px solid ${selected === i ? route.color : 'var(--border)'}`,
                  borderRadius: '12px', padding: '20px', cursor: 'pointer',
                  boxShadow: selected === i ? `0 0 0 1px ${route.color}` : 'var(--shadow)',
                  transition: 'all 0.15s ease',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: selected === i ? '16px' : '0' }}>
                    <span style={{ padding: '3px 10px', background: route.color, borderRadius: '4px', fontSize: '11px', fontWeight: '800', color: '#fff' }}>{route.type}</span>
                    <div style={{ display: 'flex', gap: '24px' }}>
                      {[['⏱', route.time], ['💰', route.cost], ['🌿', route.co2]].map(([icon, val]) => (
                        <div key={val} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)' }}>{val}</div>
                          <div style={{ fontSize: '10px', color: 'var(--text3)' }}>{icon}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {selected === i && (
                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
                      {route.steps.map((step, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '8px 0', borderBottom: j < route.steps.length - 1 ? '1px solid var(--border)' : 'none', fontSize: '13px', color: 'var(--text2)' }}>
                          <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: route.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '800', color: '#fff', flexShrink: 0, marginTop: '1px' }}>{j + 1}</div>
                          {step}
                        </div>
                      ))}
                      <button style={{ marginTop: '14px', width: '100%', padding: '11px', background: route.color, border: 'none', borderRadius: '8px', color: '#fff', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}>
                        Start Navigation →
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SmartRoute;