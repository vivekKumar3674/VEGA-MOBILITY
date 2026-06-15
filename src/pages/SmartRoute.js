import React, { useState } from 'react';

const routes = [
  {
    type: 'Fastest', time: '32 min', cost: '₹28', co2: '0.8 kg',
    steps: [
      '🚶 Walk 4 min to Guindy Metro Station',
      '🚇 Metro: Guindy → Chennai Central (18 min)',
      '🚌 MTC 21C: Park Town → Destination (10 min)',
    ],
    color: '#4ade80', bg: 'rgba(74,222,128,0.08)',
  },
  {
    type: 'Cheapest', time: '48 min', cost: '₹12', co2: '0.5 kg',
    steps: [
      '🚶 Walk 3 min to Guindy Bus Stop',
      '🚌 MTC 5D: Guindy → Koyambedu (30 min)',
      '🚌 MTC 15B: Koyambedu → Anna Nagar (15 min)',
    ],
    color: '#60a5fa', bg: 'rgba(96,165,250,0.08)',
  },
  {
    type: 'Greenest', time: '40 min', cost: '₹20', co2: '0.2 kg',
    steps: [
      '🚴 Cycle 6 min to St. Thomas Mount Metro',
      '🚇 Metro: St. Thomas Mount → Chennai Central (24 min)',
      '🚶 Walk 10 min to Parry\'s Corner',
    ],
    color: '#86efac', bg: 'rgba(134,239,172,0.08)',
  },
];

function SmartRoute() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [searched, setSearched] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <div style={{ minHeight: '100vh', background: '#020a06', paddingTop: '100px' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,222,128,0.07) 0%, transparent 70%)', top: '10%', right: '5%', animation: 'flow 10s ease-in-out infinite', filter: 'blur(40px)' }} />
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 24px', position: 'relative', zIndex: 1 }}>
        <p style={{ color: '#4ade80', letterSpacing: '4px', fontSize: '11px', marginBottom: '12px' }}>MODULE 01</p>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: '900', marginBottom: '16px', background: 'linear-gradient(135deg, #fff, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SmartRoute AI</h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '16px', lineHeight: '1.7', marginBottom: '48px' }}>
          AI-powered multi-modal journey planner across Chennai Metro, MTC Bus, MRTS & Auto.
        </p>

        <div style={{ background: 'rgba(74,222,128,0.04)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '28px', padding: '32px', marginBottom: '36px', backdropFilter: 'blur(20px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', width: '10px', height: '10px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
              <input value={from} onChange={e => setFrom(e.target.value)}
                placeholder="From: e.g. Guindy, Tambaram, T. Nagar"
                style={{ width: '100%', padding: '16px 16px 16px 40px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(74,222,128,0.15)', borderRadius: '14px', color: '#fff', fontSize: '15px', outline: 'none' }} />
            </div>
            <div style={{ width: '1px', height: '16px', background: 'rgba(74,222,128,0.2)', marginLeft: '20px' }} />
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', width: '10px', height: '10px', borderRadius: '3px', background: '#f472b6', boxShadow: '0 0 8px #f472b6' }} />
              <input value={to} onChange={e => setTo(e.target.value)}
                placeholder="To: e.g. Chennai Central, Koyambedu, Anna Nagar"
                style={{ width: '100%', padding: '16px 16px 16px 40px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(74,222,128,0.15)', borderRadius: '14px', color: '#fff', fontSize: '15px', outline: 'none' }} />
            </div>
            <button onClick={() => { if (from && to) setSearched(true); }} style={{ padding: '16px', background: 'linear-gradient(135deg, #4ade80, #16a34a)', border: 'none', borderRadius: '14px', color: '#020a06', fontSize: '16px', fontWeight: '800', cursor: 'pointer', boxShadow: '0 0 30px rgba(74,222,128,0.3)' }}>
              🔍 Find Best Routes
            </button>
          </div>
        </div>

        {searched && (
          <div>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', marginBottom: '20px' }}>
              3 AI-optimized routes: <strong style={{ color: '#fff' }}>{from}</strong> → <strong style={{ color: '#fff' }}>{to}</strong>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {routes.map((route, i) => (
                <div key={i} onClick={() => setSelected(i)} style={{ padding: '24px', background: selected === i ? route.bg : 'rgba(255,255,255,0.02)', border: `1px solid ${selected === i ? route.color + '50' : 'rgba(255,255,255,0.06)'}`, borderRadius: '20px', cursor: 'pointer', transition: 'all 0.25s ease', boxShadow: selected === i ? `0 8px 32px ${route.color}15` : 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: selected === i ? '20px' : '0', flexWrap: 'wrap', gap: '12px' }}>
                    <span style={{ padding: '5px 14px', background: route.color, borderRadius: '20px', fontSize: '12px', fontWeight: '800', color: '#020a06' }}>{route.type}</span>
                    <div style={{ display: 'flex', gap: '28px' }}>
                      {[['⏱', route.time, 'Time'], ['💰', route.cost, 'Cost'], ['🌿', route.co2, 'CO₂']].map(([icon, val, label]) => (
                        <div key={label} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '20px', fontWeight: '900', color: route.color }}>{val}</div>
                          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {selected === i && (
                    <div style={{ borderTop: `1px solid ${route.color}20`, paddingTop: '16px' }}>
                      {route.steps.map((step, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: j < route.steps.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                          <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: route.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800', color: '#020a06', flexShrink: 0 }}>{j + 1}</div>
                          {step}
                        </div>
                      ))}
                      <button style={{ marginTop: '16px', width: '100%', padding: '13px', background: `linear-gradient(135deg, ${route.color}, ${route.color}aa)`, border: 'none', borderRadius: '12px', color: '#020a06', fontWeight: '800', fontSize: '14px', cursor: 'pointer' }}>
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