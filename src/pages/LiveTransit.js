import React, { useState, useEffect } from 'react';

const initialBuses = [
  { id: 'MTC 21C', route: 'Guindy → Broadway', eta: 3, occupancy: 72, status: 'On Time', color: '#2196f3' },
  { id: 'MTC 5D', route: 'Anna Nagar → Central', eta: 7, occupancy: 45, status: 'On Time', color: '#2196f3' },
  { id: 'MTC 11B', route: 'Tambaram → Egmore', eta: 12, occupancy: 89, status: 'Delayed', color: '#ff9800' },
  { id: 'MTC 70', route: 'T Nagar → Airport', eta: 2, occupancy: 30, status: 'On Time', color: '#2196f3' },
];

const metroLines = [
  { line: 'Blue Line', from: 'Airport', to: 'Wimco Nagar', nextTrain: 4, crowding: 'Low' },
  { line: 'Green Line', from: 'Central', to: 'St Thomas Mount', nextTrain: 7, crowding: 'High' },
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

  const tabs = ['bus', 'metro', 'train'];

  return (
    <div style={{ minHeight: '100vh', background: '#050a14', paddingTop: '100px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>

        <div style={{ marginBottom: '48px' }}>
          <p style={{ color: '#2196f3', letterSpacing: '4px', fontSize: '12px', marginBottom: '12px' }}>MODULE 05</p>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: '900', marginBottom: '16px' }}>LiveTransit Hub</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: '1.7' }}>
            Unified real-time tracking for MTC buses, Metro, and local trains — all in one dashboard.
          </p>
        </div>

        {/* Live indicator */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          marginBottom: '28px',
        }}>
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#4caf50',
            boxShadow: '0 0 10px #4caf50',
            animation: 'pulse 1s infinite',
          }} />
          <span style={{ color: '#4caf50', fontSize: '13px', fontWeight: '700' }}>LIVE</span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>
            Updated {lastUpdated.toLocaleTimeString()}
          </span>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: '10px 24px',
              background: activeTab === tab ? '#2196f3' : 'rgba(255,255,255,0.05)',
              border: `1px solid ${activeTab === tab ? '#2196f3' : 'rgba(255,255,255,0.1)'}`,
              borderRadius: '20px',
              color: '#fff', fontWeight: '700', fontSize: '14px',
              cursor: 'pointer', textTransform: 'capitalize',
            }}>{tab === 'bus' ? '🚌 Bus' : tab === 'metro' ? '🚇 Metro' : '🚂 Train'}</button>
          ))}
        </div>

        {/* Bus Tab */}
        {activeTab === 'bus' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {buses.map((bus, i) => (
              <div key={i} style={{
                padding: '20px 24px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                      <span style={{
                        padding: '3px 10px',
                        background: 'rgba(33,150,243,0.2)',
                        border: '1px solid rgba(33,150,243,0.4)',
                        borderRadius: '6px',
                        fontSize: '13px', fontWeight: '700', color: '#2196f3',
                      }}>{bus.id}</span>
                      <span style={{
                        fontSize: '12px', fontWeight: '700',
                        color: bus.status === 'On Time' ? '#4caf50' : '#ff9800',
                      }}>{bus.status}</span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>{bus.route}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '28px', fontWeight: '900', color: '#2196f3' }}>{bus.eta}</div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>min away</div>
                    </div>
                    <div style={{ textAlign: 'center', minWidth: '80px' }}>
                      <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '6px' }}>{bus.occupancy}%</div>
                      <div style={{
                        height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px',
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${bus.occupancy}%`,
                          background: bus.occupancy > 80 ? '#f44336' : bus.occupancy > 50 ? '#ff9800' : '#4caf50',
                          borderRadius: '3px',
                          transition: 'width 0.5s ease',
                        }} />
                      </div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>occupancy</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Metro Tab */}
        {activeTab === 'metro' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {metroLines.map((line, i) => (
              <div key={i} style={{
                padding: '24px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <div style={{
                      display: 'inline-block',
                      padding: '3px 12px',
                      background: line.line === 'Blue Line' ? 'rgba(33,150,243,0.2)' : 'rgba(76,175,80,0.2)',
                      border: `1px solid ${line.line === 'Blue Line' ? '#2196f3' : '#4caf50'}`,
                      borderRadius: '6px',
                      fontSize: '12px', fontWeight: '700',
                      color: line.line === 'Blue Line' ? '#2196f3' : '#4caf50',
                      marginBottom: '8px',
                    }}>{line.line}</div>
                    <p style={{ fontSize: '16px', fontWeight: '700' }}>{line.from} → {line.to}</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '36px', fontWeight: '900', color: '#2196f3' }}>{line.nextTrain} min</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>Next train</div>
                    <div style={{
                      marginTop: '8px', fontSize: '12px', fontWeight: '700',
                      color: line.crowding === 'Low' ? '#4caf50' : '#f44336',
                    }}>Crowding: {line.crowding}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Train Tab */}
        {activeTab === 'train' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {trains.map((train, i) => (
              <div key={i} style={{
                padding: '24px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
              }}>
                <div>
                  <p style={{ fontWeight: '700', marginBottom: '6px' }}>{train.name}</p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Platform {train.platform}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '22px', fontWeight: '900' }}>{train.departure}</div>
                  <div style={{
                    fontSize: '12px', fontWeight: '700',
                    color: train.status === 'On Time' ? '#4caf50' : '#ff9800',
                  }}>{train.status}</div>
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