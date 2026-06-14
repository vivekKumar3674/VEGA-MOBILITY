import React, { useState } from 'react';

const routes = [
  {
    type: 'Fastest',
    time: '32 min',
    cost: '₹28',
    co2: '0.8 kg',
    steps: ['🚶 Walk 5 min to Guindy Metro', '🚇 Metro: Guindy → Central (18 min)', '🚌 Bus 21C: Central → Destination (9 min)'],
    color: '#1a9e7a',
  },
  {
    type: 'Cheapest',
    time: '48 min',
    cost: '₹12',
    co2: '0.5 kg',
    steps: ['🚶 Walk 3 min to Bus Stop', '🚌 Bus 5D: Home → Broadway (35 min)', '🚶 Walk 10 min to Destination'],
    color: '#2196f3',
  },
  {
    type: 'Greenest',
    time: '40 min',
    cost: '₹20',
    co2: '0.2 kg',
    steps: ['🚴 Cycle 8 min to Metro', '🚇 Metro: Anna Nagar → Egmore (22 min)', '🚶 Walk 10 min to Destination'],
    color: '#4caf50',
  },
];

function SmartRoute() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [searched, setSearched] = useState(false);
  const [selected, setSelected] = useState(0);

  const handleSearch = () => {
    if (from && to) setSearched(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#050a14', paddingTop: '100px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{ color: '#1a9e7a', letterSpacing: '4px', fontSize: '12px', marginBottom: '12px' }}>MODULE 01</p>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: '900', marginBottom: '16px' }}>SmartRoute AI</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: '1.7' }}>
            Multi-modal journey planner across Metro, Bus, Train & Auto using live GTFS feeds and AI optimization.
          </p>
        </div>

        {/* Search Box */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(26,158,122,0.3)',
          borderRadius: '24px',
          padding: '32px',
          marginBottom: '40px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                width: '10px', height: '10px', borderRadius: '50%', background: '#1a9e7a',
              }} />
              <input
                value={from}
                onChange={e => setFrom(e.target.value)}
                placeholder="From: Enter origin (e.g. Guindy)"
                style={{
                  width: '100%', padding: '16px 16px 16px 40px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px', color: '#fff', fontSize: '15px',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{
              width: '1px', height: '20px',
              background: 'rgba(255,255,255,0.1)',
              marginLeft: '20px',
            }} />

            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                width: '10px', height: '10px', borderRadius: '3px', background: '#e91e8c',
              }} />
              <input
                value={to}
                onChange={e => setTo(e.target.value)}
                placeholder="To: Enter destination (e.g. Central Station)"
                style={{
                  width: '100%', padding: '16px 16px 16px 40px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px', color: '#fff', fontSize: '15px',
                  outline: 'none',
                }}
              />
            </div>

            <button
              onClick={handleSearch}
              style={{
                padding: '16px',
                background: 'linear-gradient(135deg, #1a9e7a, #0d6e54)',
                border: 'none', borderRadius: '12px',
                color: '#fff', fontSize: '16px', fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(26,158,122,0.3)',
              }}>
              🔍 Find Best Routes
            </button>
          </div>
        </div>

        {/* Results */}
        {searched && (
          <div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', marginBottom: '20px' }}>
              3 routes found from <strong style={{ color: '#fff' }}>{from}</strong> to <strong style={{ color: '#fff' }}>{to}</strong>
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {routes.map((route, i) => (
                <div
                  key={i}
                  onClick={() => setSelected(i)}
                  style={{
                    padding: '24px',
                    background: selected === i ? `rgba(${route.color === '#1a9e7a' ? '26,158,122' : route.color === '#2196f3' ? '33,150,243' : '76,175,80'},0.1)` : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${selected === i ? route.color : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{
                      padding: '4px 12px',
                      background: route.color,
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '700',
                    }}>{route.type}</div>
                    <div style={{ display: 'flex', gap: '24px' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '22px', fontWeight: '900', color: route.color }}>{route.time}</div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Duration</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '22px', fontWeight: '900' }}>{route.cost}</div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Cost</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '22px', fontWeight: '900', color: '#4caf50' }}>{route.co2}</div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>CO₂</div>
                      </div>
                    </div>
                  </div>

                  {selected === i && (
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                      {route.steps.map((step, j) => (
                        <div key={j} style={{
                          display: 'flex', alignItems: 'center', gap: '12px',
                          padding: '10px 0',
                          borderBottom: j < route.steps.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                          fontSize: '14px', color: 'rgba(255,255,255,0.7)',
                        }}>
                          <div style={{
                            width: '24px', height: '24px',
                            borderRadius: '50%',
                            background: route.color,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '11px', fontWeight: '700', flexShrink: 0,
                          }}>{j + 1}</div>
                          {step}
                        </div>
                      ))}
                      <button style={{
                        marginTop: '16px',
                        width: '100%',
                        padding: '12px',
                        background: route.color,
                        border: 'none', borderRadius: '10px',
                        color: '#fff', fontWeight: '700', fontSize: '14px',
                        cursor: 'pointer',
                      }}>Start Navigation →</button>
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