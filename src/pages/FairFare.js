import React, { useState } from 'react';

const fareData = [
  { mode: '🚇 Chennai Metro', official: 40, surge: 40, saving: 0 },
  { mode: '🛺 Auto Rickshaw', official: 85, surge: 210, saving: 125 },
  { mode: '🚕 Ola / Uber Cab', official: 120, surge: 340, saving: 220 },
  { mode: '🚌 MTC Bus', official: 15, surge: 15, saving: 0 },
];

function FairFare() {
  const [from, setFrom] = useState('Guindy');
  const [to, setTo] = useState('Chennai Central');
  const [searched, setSearched] = useState(true);
  const [complained, setComplained] = useState(null);

  return (
    <div style={{ minHeight: '100vh', background: '#020a06', paddingTop: '100px' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 70%)', top: '15%', right: '5%', animation: 'flow 9s ease-in-out infinite', filter: 'blur(50px)' }} />
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 24px', position: 'relative', zIndex: 1 }}>
        <p style={{ color: '#fbbf24', letterSpacing: '4px', fontSize: '11px', marginBottom: '12px' }}>MODULE 04</p>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: '900', marginBottom: '16px', background: 'linear-gradient(135deg, #fff, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FairFare Engine</h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '16px', lineHeight: '1.7', marginBottom: '48px' }}>
          Tamil Nadu government-approved rates. No surge. No hidden charges. Know before you go.
        </p>

        <div style={{ padding: '16px 24px', marginBottom: '28px', background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '20px' }}>⚠️</span>
          <p style={{ color: '#fbbf24', fontSize: '14px' }}>
            Peak hour surge detected — Ola/Uber showing <strong>2.8x surge (₹340)</strong>. VEGA shows Tamil Nadu govt approved rate: <strong>₹120</strong>.
          </p>
        </div>

        <div style={{ background: 'rgba(251,191,36,0.04)', border: '1px solid rgba(251,191,36,0.15)', borderRadius: '24px', padding: '28px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
            {[['FROM', from, setFrom], ['TO', to, setTo]].map(([label, val, setter]) => (
              <div key={label} style={{ flex: 1, minWidth: '140px' }}>
                <label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '8px', letterSpacing: '2px' }}>{label}</label>
                <input value={val} onChange={e => setter(e.target.value)} style={{ width: '100%', padding: '13px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(251,191,36,0.15)', borderRadius: '12px', color: '#fff', fontSize: '15px', outline: 'none' }} />
              </div>
            ))}
            <button onClick={() => setSearched(true)} style={{ padding: '13px 28px', background: 'linear-gradient(135deg, #fbbf24, #d97706)', border: 'none', borderRadius: '12px', color: '#020a06', fontWeight: '800', cursor: 'pointer', fontSize: '14px' }}>Check Fares</button>
          </div>
        </div>

        {searched && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', marginBottom: '8px' }}>
              Fare comparison: <strong style={{ color: '#fff' }}>{from}</strong> → <strong style={{ color: '#fff' }}>{to}</strong>
            </p>
            {fareData.map((fare, i) => (
              <div key={i} style={{ padding: '22px 24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(251,191,36,0.1)', borderRadius: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>{fare.mode}</span>
                  <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginBottom: '4px' }}>GOVT RATE</div>
                      <div style={{ fontSize: '22px', fontWeight: '900', color: '#4ade80' }}>₹{fare.official}</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginBottom: '4px' }}>APP SURGE</div>
                      <div style={{ fontSize: '22px', fontWeight: '900', color: fare.surge > fare.official ? '#f87171' : 'rgba(255,255,255,0.3)', textDecoration: fare.surge > fare.official ? 'line-through' : 'none' }}>₹{fare.surge}</div>
                    </div>
                    {fare.saving > 0 && (
                      <div style={{ padding: '6px 14px', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '20px', fontSize: '13px', color: '#4ade80', fontWeight: '700' }}>Save ₹{fare.saving}</div>
                    )}
                  </div>
                </div>
                {fare.saving > 0 && (
                  <button onClick={() => setComplained(i)} style={{ marginTop: '12px', padding: '8px 16px', background: complained === i ? 'rgba(251,191,36,0.15)' : 'transparent', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '8px', color: '#fbbf24', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
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