import React, { useState } from 'react';

const fareData = [
  { mode: '🚇 Chennai Metro', official: 40, surge: 40, saving: 0 },
  { mode: '🛺 Auto Rickshaw', official: 85, surge: 210, saving: 125 },
  { mode: '🚕 Ola / Uber Cab', official: 120, surge: 340, saving: 220 },
  { mode: '🚌 MTC Bus', official: 15, surge: 15, saving: 0 },
];

function FairFare({ theme }) {
  const [from, setFrom] = useState('Guindy');
  const [to, setTo] = useState('Chennai Central');
  const [searched, setSearched] = useState(true);
  const [complained, setComplained] = useState(null);
  const dark = theme === 'dark';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px' }}>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#d97706', fontWeight: '700', marginBottom: '10px' }}>MODULE 04</p>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', color: 'var(--text)', marginBottom: '12px' }}>FairFare Engine</h1>
          <p style={{ color: 'var(--text3)', fontSize: '15px', lineHeight: '1.7' }}>Tamil Nadu government-approved rates. No surge. No hidden charges.</p>
        </div>

        {/* Alert */}
        <div style={{ padding: '14px 18px', marginBottom: '24px', background: dark ? 'rgba(217,119,6,0.08)' : '#fffbeb', border: '1px solid rgba(217,119,6,0.3)', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <span>⚠️</span>
          <p style={{ color: '#d97706', fontSize: '13px', lineHeight: '1.5' }}>
            Peak hour surge detected — Ola/Uber showing <strong>2.8x surge (₹340)</strong>. VEGA shows Tamil Nadu govt approved rate: <strong>₹120</strong>.
          </p>
        </div>

        {/* Search */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px', marginBottom: '24px', boxShadow: 'var(--shadow)' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
            {[['FROM', from, setFrom], ['TO', to, setTo]].map(([label, val, setter]) => (
              <div key={label} style={{ flex: 1, minWidth: '130px' }}>
                <label style={{ fontSize: '10px', color: 'var(--text3)', display: 'block', marginBottom: '6px', letterSpacing: '2px', fontWeight: '600' }}>{label}</label>
                <input value={val} onChange={e => setter(e.target.value)} style={{ width: '100%', padding: '11px 14px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontSize: '14px', outline: 'none' }} />
              </div>
            ))}
            <button onClick={() => setSearched(true)} style={{ padding: '11px 24px', background: '#d97706', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: '700', cursor: 'pointer', fontSize: '13px' }}>Check</button>
          </div>
        </div>

        {/* Fares */}
        {searched && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p style={{ color: 'var(--text3)', fontSize: '12px', marginBottom: '4px' }}>
              <strong style={{ color: 'var(--text)' }}>{from}</strong> → <strong style={{ color: 'var(--text)' }}>{to}</strong>
            </p>
            {fareData.map((fare, i) => (
              <div key={i} style={{ padding: '18px 20px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px', boxShadow: 'var(--shadow)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <span style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text)' }}>{fare.mode}</span>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '10px', color: 'var(--text3)', marginBottom: '3px', letterSpacing: '1px' }}>GOVT RATE</div>
                      <div style={{ fontSize: '20px', fontWeight: '900', color: '#16a34a' }}>₹{fare.official}</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '10px', color: 'var(--text3)', marginBottom: '3px', letterSpacing: '1px' }}>APP SURGE</div>
                      <div style={{ fontSize: '20px', fontWeight: '900', color: fare.surge > fare.official ? '#dc2626' : 'var(--text3)', textDecoration: fare.surge > fare.official ? 'line-through' : 'none' }}>₹{fare.surge}</div>
                    </div>
                    {fare.saving > 0 && (
                      <div style={{ padding: '4px 12px', background: dark ? 'rgba(22,163,74,0.12)' : '#f0fdf4', border: '1px solid rgba(22,163,74,0.3)', borderRadius: '20px', fontSize: '12px', color: '#16a34a', fontWeight: '700' }}>Save ₹{fare.saving}</div>
                    )}
                  </div>
                </div>
                {fare.saving > 0 && (
                  <button onClick={() => setComplained(i)} style={{ marginTop: '10px', padding: '6px 14px', background: complained === i ? (dark ? 'rgba(217,119,6,0.15)' : '#fffbeb') : 'transparent', border: '1px solid rgba(217,119,6,0.4)', borderRadius: '6px', color: '#d97706', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
                    {complained === i ? '✅ Complaint Filed with RTO' : '🚨 Report Overcharging to RTO'}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FairFare;