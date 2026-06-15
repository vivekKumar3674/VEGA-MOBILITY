import React, { useState, useEffect } from 'react';

const initialBuses = [
  { id: 'MTC 21C', route: 'Guindy → Broadway', eta: 3, occupancy: 72, status: 'On Time' },
  { id: 'MTC 5D', route: 'Anna Nagar → Central', eta: 7, occupancy: 45, status: 'On Time' },
  { id: 'MTC 11B', route: 'Tambaram → Egmore', eta: 12, occupancy: 89, status: 'Delayed' },
  { id: 'MTC 70', route: 'T Nagar → Airport', eta: 2, occupancy: 30, status: 'On Time' },
];

const metroLines = [
  { line: 'Blue Line', from: 'Airport', to: 'Wimco Nagar', nextTrain: 4, crowding: 'Low', color: '#60a5fa' },
  { line: 'Green Line', from: 'Central', to: 'St Thomas Mount', nextTrain: 7, crowding: 'High', color: '#4ade80' },
];

const trains = [
  { name: 'Chennai Central → Tambaram', platform: '3', departure: '21:45', status: 'On Time' },
  { name: 'Chennai Beach → Velachery', platform: '1', departure: '21:52', status: 'Delayed 8 min' },
];

function LiveTransit() {
  const [buses, setBuses] = useState(initialBuses);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [activeTab, setActiveTab] = useState('bus');

  useEffect(() => {
    const interval = setInterval(() => {
      setBuses(prev => prev.map(bus => ({
        ...bus,
        eta: Math.max(1, bus.eta + Math.floor(Math.random() * 3) - 1),
        occupancy: Math.min(100, Math.max(10, bus.occupancy + Math.floor(Math.random() * 10) - 5)),
      })));
      setLastUpdated(new Date());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: 'bus', label: '🚌 Bus', color: '#60a5fa' },
    { id: 'metro', label: '🚇 Metro', color: '#4ade80' },
    { id: 'train', label: '🚂 Train', color: '#c084fc' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#020a06', paddingTop: '100px' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,165,250,0.07) 0%, transparent 70%)', top: '10%', right: '0%', animation: 'flow 11s ease-in-out infinite', filter: 'blur(50px)' }} />
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 24px', position: 'relative', zIndex: 1 }}>
        <p style={{ color: '#60a5fa', letterSpacing: '4px', fontSize: '11px', marginBottom: '12px' }}>MODULE 05</p>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: '900', marginBottom: '16px', background: 'linear-gradient(135deg, #fff, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>LiveTransit Hub</h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '16px', lineHeight: '1.7', marginBottom: '48px' }}>Unified real-time tracking for buses, metro and trains.</p>

        {/* Live indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 10px #4ade80', animation: 'pulse 1.5s infinite' }} />
          <span style={{ color: '#4ade80', fontSize: '13px', fontWeight: '700' }}>LIVE</span>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>Updated {lastUpdated.toLocaleTimeString()}</span>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              padding: '10px 24px',
              background: activeTab === tab.id ? tab.color : 'rgba(255,255,255,0.04)',
              border: `1px solid ${activeTab === tab.id ? tab.color : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '20px', color: activeTab === tab.id ? '#020a06' : 'rgba(255,255,255,0.5)',
              fontWeight: '700', fontSize: '13px', cursor: 'pointer',
              boxShadow: activeTab === tab.id ? `0 0 20px ${tab.color}40` : 'none',
              transition: 'all 0.25s ease',
            }}>{tab.label}</button>
          ))}
        </div>

        {/* Bus */}
        {activeTab === 'bus' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {buses.map((bus, i) => (
              <div key={i} style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(96,165,250,0.1)', borderRadius: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                      <span style={{ padding: '3px 10px', background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.3)', borderRadius: '6px', fontSize: '13px', fontWeight: '700', color: '#60a5fa' }}>{bus.id}</span>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: bus.status === 'On Time' ? '#4ade80' : '#fbbf24' }}>{bus.status}</span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>{bus.route}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '30px', fontWeight: '900', color: '#60a5fa', transition: 'all 0.5s ease' }}>{bus.eta}</div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>min away</div>
                    </div>
                    <div style={{ minWidth: '80px' }}>
                      <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '6px', textAlign: 'center' }}>{bus.occupancy}%</div>
                      <div style={{ height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px' }}>
                        <div style={{ height: '100%', width: `${bus.occupancy}%`, background: bus.occupancy > 80 ? '#f87171' : bus.occupancy > 50 ? '#fbbf24' : '#4ade80', borderRadius: '3px', transition: 'width 0.5s ease' }} />
                      </div>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginTop: '4px' }}>occupancy</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Metro */}
        {activeTab === 'metro' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {metroLines.map((line, i) => (
              <div key={i} style={{ padding: '28px', background: 'rgba(255,255,255,0.02)', border: `1px solid ${line.color}20`, borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <div style={{ display: 'inline-block', padding: '3px 12px', background: `${line.color}20`, border: `1px solid ${line.color}50`, borderRadius: '6px', fontSize: '12px', fontWeight: '700', color: line.color, marginBottom: '10px' }}>{line.line}</div>
                  <p style={{ fontSize: '16px', fontWeight: '700' }}>{line.from} → {line.to}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '38px', fontWeight: '900', color: line.color }}>{line.nextTrain} min</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>Next train</div>
                  <div style={{ marginTop: '6px', fontSize: '12px', fontWeight: '700', color: line.crowding === 'Low' ? '#4ade80' : '#f87171' }}>Crowding: {line.crowding}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Train */}
        {activeTab === 'train' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {trains.map((train, i) => (
              <div key={i} style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(192,132,252,0.12)', borderRadius: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <p style={{ fontWeight: '700', marginBottom: '6px' }}>{train.name}</p>
                  <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px' }}>Platform {train.platform}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '24px', fontWeight: '900' }}>{train.departure}</div>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: train.status === 'On Time' ? '#4ade80' : '#fbbf24' }}>{train.status}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LiveTransit;