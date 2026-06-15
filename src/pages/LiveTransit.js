import React, { useState, useEffect } from 'react';

const initialBuses = [
  { id: 'MTC 21C', route: 'Guindy → Parry\'s Corner', eta: 3, occupancy: 72, status: 'On Time' },
  { id: 'MTC 5D', route: 'Koyambedu → Chennai Central', eta: 7, occupancy: 45, status: 'On Time' },
  { id: 'MTC 11B', route: 'Tambaram → Egmore', eta: 12, occupancy: 89, status: 'Delayed' },
  { id: 'MTC 70', route: 'T. Nagar → Chennai Airport', eta: 2, occupancy: 30, status: 'On Time' },
];

const metroLines = [
  { line: 'Blue Line', from: 'Chennai Airport', to: 'Wimco Nagar', nextTrain: 4, crowding: 'Low', color: '#2563eb' },
  { line: 'Green Line', from: 'Chennai Central', to: 'St. Thomas Mount', nextTrain: 7, crowding: 'High', color: '#16a34a' },
];

const trains = [
  { name: 'Chennai Central → Tambaram Fast', platform: '3', departure: '21:45', status: 'On Time' },
  { name: 'Chennai Beach → Velachery MRTS', platform: '1', departure: '21:52', status: 'Delayed 8 min' },
];

function LiveTransit({ theme }) {
  const [buses, setBuses] = useState(initialBuses);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [activeTab, setActiveTab] = useState('bus');
  const dark = theme === 'dark';

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
    { id: 'bus', label: '🚌 MTC Bus', color: '#2563eb' },
    { id: 'metro', label: '🚇 Metro', color: '#16a34a' },
    { id: 'train', label: '🚂 MRTS', color: '#7c3aed' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px' }}>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#2563eb', fontWeight: '700', marginBottom: '10px' }}>MODULE 05</p>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', color: 'var(--text)', marginBottom: '12px' }}>LiveTransit Hub</h1>
          <p style={{ color: 'var(--text3)', fontSize: '15px', lineHeight: '1.7' }}>Real-time tracking for MTC buses, Chennai Metro & MRTS trains — all in one dashboard.</p>
        </div>

        {/* Live */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#16a34a', animation: 'pulse 1.5s infinite' }} />
          <span style={{ color: '#16a34a', fontSize: '12px', fontWeight: '700' }}>LIVE</span>
          <span style={{ color: 'var(--text3)', fontSize: '12px' }}>· Updated {lastUpdated.toLocaleTimeString()}</span>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', borderBottom: '1px solid var(--border)', paddingBottom: '0' }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ padding: '10px 20px', background: 'transparent', border: 'none', borderBottom: `2px solid ${activeTab === tab.id ? tab.color : 'transparent'}`, color: activeTab === tab.id ? tab.color : 'var(--text3)', fontWeight: activeTab === tab.id ? '700' : '500', fontSize: '13px', cursor: 'pointer', transition: 'all 0.15s ease', marginBottom: '-1px' }}>{tab.label}</button>
          ))}
        </div>

        {/* Bus */}
        {activeTab === 'bus' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {buses.map((bus, i) => (
              <div key={i} style={{ padding: '18px 20px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px', boxShadow: 'var(--shadow)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ padding: '2px 8px', background: dark ? 'rgba(37,99,235,0.15)' : '#eff6ff', border: '1px solid rgba(37,99,235,0.2)', borderRadius: '4px', fontSize: '12px', fontWeight: '700', color: '#2563eb' }}>{bus.id}</span>
                      <span style={{ fontSize: '11px', fontWeight: '700', color: bus.status === 'On Time' ? '#16a34a' : '#d97706' }}>{bus.status}</span>
                    </div>
                    <p style={{ color: 'var(--text3)', fontSize: '13px' }}>{bus.route}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '26px', fontWeight: '900', color: '#2563eb' }}>{bus.eta}</div>
                      <div style={{ fontSize: '10px', color: 'var(--text3)' }}>min away</div>
                    </div>
                    <div style={{ minWidth: '72px' }}>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text)', marginBottom: '5px', textAlign: 'center' }}>{bus.occupancy}%</div>
                      <div style={{ height: '4px', background: 'var(--bg3)', borderRadius: '2px' }}>
                        <div style={{ height: '100%', width: `${bus.occupancy}%`, background: bus.occupancy > 80 ? '#dc2626' : bus.occupancy > 50 ? '#d97706' : '#16a34a', borderRadius: '2px', transition: 'width 0.5s ease' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Metro */}
        {activeTab === 'metro' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {metroLines.map((line, i) => (
              <div key={i} style={{ padding: '22px', background: 'var(--surface)', border: '1px solid var(--border)', borderLeft: `3px solid ${line.color}`, borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', boxShadow: 'var(--shadow)' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: line.color, marginBottom: '6px', letterSpacing: '1px' }}>{line.line}</div>
                  <p style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text)' }}>{line.from} → {line.to}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '32px', fontWeight: '900', color: line.color }}>{line.nextTrain} min</div>
                  <div style={{ fontSize: '11px', color: 'var(--text3)' }}>Next train</div>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: line.crowding === 'Low' ? '#16a34a' : '#dc2626', marginTop: '3px' }}>Crowding: {line.crowding}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Train */}
        {activeTab === 'train' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {trains.map((train, i) => (
              <div key={i} style={{ padding: '20px', background: 'var(--surface)', border: '1px solid var(--border)', borderLeft: '3px solid #7c3aed', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', boxShadow: 'var(--shadow)' }}>
                <div>
                  <p style={{ fontWeight: '700', color: 'var(--text)', marginBottom: '5px' }}>{train.name}</p>
                  <p style={{ color: 'var(--text3)', fontSize: '13px' }}>Platform {train.platform}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '22px', fontWeight: '900', color: 'var(--text)' }}>{train.departure}</div>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: train.status === 'On Time' ? '#16a34a' : '#d97706' }}>{train.status}</div>
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