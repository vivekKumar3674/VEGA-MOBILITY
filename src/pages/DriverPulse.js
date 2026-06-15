import React, { useState } from 'react';

const earnings = [
  { day: 'Mon', amount: 842, trips: 12 },
  { day: 'Tue', amount: 1120, trips: 16 },
  { day: 'Wed', amount: 760, trips: 11 },
  { day: 'Thu', amount: 1340, trips: 19 },
  { day: 'Fri', amount: 1580, trips: 22 },
  { day: 'Sat', amount: 1890, trips: 26 },
  { day: 'Sun', amount: 640, trips: 9 },
];

const disputes = [
  { id: '#D-2041', issue: 'Passenger cancelled after boarding', amount: '₹80', status: 'Resolved', date: '12 Jun' },
  { id: '#D-2038', issue: 'App showed wrong fare', amount: '₹45', status: 'Pending', date: '10 Jun' },
  { id: '#D-2031', issue: 'Route deviation penalty', amount: '₹120', status: 'Under Review', date: '8 Jun' },
];

const maxEarning = Math.max(...earnings.map(e => e.amount));

function DriverPulse() {
  const [newDispute, setNewDispute] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const totalWeek = earnings.reduce((sum, e) => sum + e.amount, 0);
  const totalTrips = earnings.reduce((sum, e) => sum + e.trips, 0);

  return (
    <div style={{ minHeight: '100vh', background: '#020a06', paddingTop: '100px' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(192,132,252,0.08) 0%, transparent 70%)', top: '10%', right: '5%', animation: 'flow 9s ease-in-out infinite', filter: 'blur(50px)' }} />
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 24px', position: 'relative', zIndex: 1 }}>
        <p style={{ color: '#c084fc', letterSpacing: '4px', fontSize: '11px', marginBottom: '12px' }}>MODULE 06</p>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: '900', marginBottom: '16px', background: 'linear-gradient(135deg, #fff, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DriverPulse</h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '16px', lineHeight: '1.7', marginBottom: '48px' }}>Full earnings transparency, dispute resolution and incentive tracking.</p>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          {[
            { label: 'This Week', value: `₹${totalWeek.toLocaleString()}`, color: '#c084fc' },
            { label: 'Total Trips', value: totalTrips, color: '#60a5fa' },
            { label: 'Avg per Trip', value: `₹${Math.round(totalWeek / totalTrips)}`, color: '#4ade80' },
            { label: 'Rating', value: '4.8 ⭐', color: '#fbbf24' },
          ].map((card, i) => (
            <div key={i} style={{ padding: '28px', background: 'rgba(255,255,255,0.02)', border: `1px solid ${card.color}20`, borderRadius: '20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${card.color}, transparent)` }} />
              <div style={{ fontSize: '34px', fontWeight: '900', color: card.color, marginBottom: '6px', textShadow: `0 0 20px ${card.color}40` }}>{card.value}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>{card.label}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(192,132,252,0.12)', borderRadius: '24px', padding: '28px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '28px' }}>Weekly Earnings</h2>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', height: '160px' }}>
            {earnings.map((e, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', height: '100%', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: '10px', color: '#c084fc', fontWeight: '700' }}>₹{e.amount}</span>
                <div style={{ width: '100%', height: `${(e.amount / maxEarning) * 120}px`, background: 'linear-gradient(to top, #c084fc, rgba(192,132,252,0.3))', borderRadius: '6px 6px 0 0', transition: 'height 0.5s ease', boxShadow: '0 0 10px rgba(192,132,252,0.2)' }} />
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>{e.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Disputes */}
        <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px' }}>Dispute Board</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          {disputes.map((d, i) => (
            <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(192,132,252,0.08)', borderRadius: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ color: '#c084fc', fontSize: '13px', fontWeight: '700' }}>{d.id}</span>
                  <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>{d.date}</span>
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>{d.issue}</p>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontWeight: '700', color: '#4ade80' }}>{d.amount}</span>
                <span style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', background: d.status === 'Resolved' ? 'rgba(74,222,128,0.12)' : d.status === 'Pending' ? 'rgba(251,191,36,0.12)' : 'rgba(96,165,250,0.12)', color: d.status === 'Resolved' ? '#4ade80' : d.status === 'Pending' ? '#fbbf24' : '#60a5fa' }}>{d.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* New Dispute */}
        <div style={{ padding: '24px', background: 'rgba(192,132,252,0.04)', border: '1px solid rgba(192,132,252,0.15)', borderRadius: '20px', marginBottom: '32px' }}>
          <p style={{ fontSize: '15px', fontWeight: '700', marginBottom: '14px' }}>File New Dispute</p>
          <textarea value={newDispute} onChange={e => setNewDispute(e.target.value)} placeholder="Describe your issue..." style={{ width: '100%', padding: '14px 16px', minHeight: '80px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(192,132,252,0.15)', borderRadius: '12px', color: '#fff', fontSize: '14px', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }} />
          <button onClick={() => { if (newDispute) setSubmitted(true); }} style={{ marginTop: '12px', padding: '11px 28px', background: submitted ? 'rgba(74,222,128,0.2)' : 'rgba(192,132,252,0.15)', border: `1px solid ${submitted ? '#4ade80' : '#c084fc'}`, borderRadius: '10px', color: '#fff', fontWeight: '700', cursor: 'pointer', fontSize: '14px' }}>
            {submitted ? '✅ Submitted!' : 'Submit Dispute'}
          </button>
        </div>

        {/* Incentives */}
        <div style={{ padding: '28px', background: 'linear-gradient(135deg, rgba(192,132,252,0.08), rgba(96,165,250,0.05))', border: '1px solid rgba(192,132,252,0.2)', borderRadius: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px' }}>🏆 This Week's Incentives</h2>
          {[
            { target: '25 trips in a day', reward: '₹200 bonus', progress: 88 },
            { target: '4.9 rating for 7 days', reward: 'Gold Badge', progress: 96 },
            { target: '100 trips this week', reward: '₹500 bonus', progress: 100 },
          ].map((inc, i) => (
            <div key={i} style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>{inc.target}</span>
                <span style={{ fontSize: '13px', color: '#c084fc', fontWeight: '700' }}>{inc.reward}</span>
              </div>
              <div style={{ height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px' }}>
                <div style={{ height: '100%', width: `${Math.min(inc.progress, 100)}%`, background: inc.progress >= 100 ? 'linear-gradient(90deg, #4ade80, #86efac)' : 'linear-gradient(90deg, #c084fc, #60a5fa)', borderRadius: '3px', boxShadow: inc.progress >= 100 ? '0 0 10px rgba(74,222,128,0.4)' : 'none' }} />
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', marginTop: '4px' }}>{inc.progress >= 100 ? '✅ Completed!' : `${inc.progress}% complete`}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DriverPulse;