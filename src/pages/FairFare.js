import React, { useState } from 'react';

const fareData = [
  { mode: '🚇 Metro', from: 'Guindy', to: 'Central', official: 40, surge: 40, saving: 0 },
  { mode: '🚗 Auto', from: 'Guindy', to: 'Central', official: 85, surge: 210, saving: 125 },
  { mode: '🚕 Cab', from: 'Guindy', to: 'Central', official: 120, surge: 340, saving: 220 },
  { mode: '🚌 Bus', from: 'Guindy', to: 'Central', official: 15, surge: 15, saving: 0 },
];

function FairFare() {
  const [from, setFrom] = useState('Guindy');
  const [to, setTo] = useState('Central');
  const [searched, setSearched] = useState(true);
  const [complained, setComplained] = useState(null);

  return (
    <div style={{ minHeight: '100vh', background: '#050a14', paddingTop: '100px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>

        <div style={{ marginBottom: '48px' }}>
          <p style={{ color: '#ff9800', letterSpacing: '4px', fontSize: '12px', marginBottom: '12px' }}>MODULE 04</p>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: '900', marginBottom: '16px' }}>FairFare Engine</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: '1.7' }}>
            Transparent, government-rate-based pricing. No surge pricing. No hidden charges. Know before you go.
          </p>
        </div>

        {/* Alert Banner */}
        <div style={{
          padding: '16px 24px',
          background: 'rgba(255,152,0,0.1)',
          border: '1px solid rgba(255,152,0,0.4)',
          borderRadius: '12px',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <span style={{ fontSize: '20px' }}>⚠️</span>
          <p style={{ color: '#ff9800', fontSize: '14px' }}>
            Peak hour detected — Cab apps showing <strong>2.8x surge</strong>. VEGA shows you the real government rate.
          </p>
        </div>

        {/* Search */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,152,0,0.3)',
          borderRadius: '20px',
          padding: '28px',
          marginBottom: '32px',
        }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
            <div style={{ flex: 1, minWidth: '160px' }}>
              <label style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '8px' }}>FROM</label>
              <input value={from} onChange={e => setFrom(e.target.value)} style={{
                width: '100%', padding: '12px 16px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px', color: '#fff', fontSize: '15px', outline: 'none',
              }} />
            </div>
            <div style={{ flex: 1, minWidth: '160px' }}>
              <label style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '8px' }}>TO</label>
              <input value={to} onChange={e => setTo(e.target.value)} style={{
                width: '100%', padding: '12px 16px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px', color: '#fff', fontSize: '15px', outline: 'none',
              }} />
            </div>
            <button onClick={() => setSearched(true)} style={{
              padding: '12px 28px',
              background: 'linear-gradient(135deg, #ff9800, #e65100)',
              border: 'none', borderRadius: '10px',
              color: '#fff', fontWeight: '700', cursor: 'pointer', fontSize: '14px',
            }}>Check Fares</button>
          </div>
        </div>

        {/* Fare Table */}
        {searched && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px' }}>
              Fare Comparison: {from} → {to}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {fareData.map((fare, i) => (
                <div key={i} style={{
                  padding: '20px 24px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700' }}>{fare.mode}</span>
                    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>GOVT RATE</div>
                        <div style={{ fontSize: '20px', fontWeight: '900', color: '#4caf50' }}>₹{fare.official}</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>APP SURGE</div>
                        <div style={{
                          fontSize: '20px', fontWeight: '900',
                          color: fare.surge > fare.official ? '#f44336' : 'rgba(255,255,255,0.5)',
                          textDecoration: fare.surge > fare.official ? 'line-through' : 'none',
                        }}>₹{fare.surge}</div>
                      </div>
                      {fare.saving > 0 && (
                        <div style={{
                          padding: '6px 14px',
                          background: 'rgba(76,175,80,0.15)',
                          border: '1px solid rgba(76,175,80,0.4)',
                          borderRadius: '20px',
                          fontSize: '13px',
                          color: '#4caf50',
                          fontWeight: '700',
                        }}>Save ₹{fare.saving}</div>
                      )}
                    </div>
                  </div>
                  {fare.saving > 0 && (
                    <button
                      onClick={() => setComplained(i)}
                      style={{
                        marginTop: '12px',
                        padding: '8px 16px',
                        background: complained === i ? 'rgba(255,152,0,0.2)' : 'transparent',
                        border: '1px solid rgba(255,152,0,0.4)',
                        borderRadius: '8px',
                        color: '#ff9800',
                        fontSize: '12px',
                        fontWeight: '700',
                        cursor: 'pointer',
                      }}>
                      {complained === i ? '✅ Complaint Filed' : '🚨 Report Overcharging'}
                    </button>
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

export default FairFare;