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
  { id: '#D-2041', issue: 'Passenger cancelled after boarding at Koyambedu Bus Stand', amount: '₹80', status: 'Resolved', date: '12 Jun' },
  { id: '#D-2038', issue: 'App showed wrong fare for T. Nagar to Guindy route', amount: '₹45', status: 'Pending', date: '10 Jun' },
  { id: '#D-2031', issue: 'Unfair route deviation penalty near Kathipara Junction', amount: '₹120', status: 'Under Review', date: '8 Jun' },
];

const maxEarning = Math.max(...earnings.map(e => e.amount));

function DriverPulse({ theme }) {
  const [newDispute, setNewDispute] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const dark = theme === 'dark';
  const totalWeek = earnings.reduce((sum, e) => sum + e.amount, 0);
  const totalTrips = earnings.reduce((sum, e) => sum + e.trips, 0);

  const statusColor = (s) => s === 'Resolved' ? '#16a34a' : s === 'Pending' ? '#d97706' : '#2563eb';
  const statusBg = (s) => dark
    ? s === 'Resolved' ? 'rgba(22,163,74,0.12)' : s === 'Pending' ? 'rgba(217,119,6,0.12)' : 'rgba(37,99,235,0.12)'
    : s === 'Resolved' ? '#f0fdf4' : s === 'Pending' ? '#fffbeb' : '#eff6ff';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px' }}>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#7c3aed', fontWeight: '700', marginBottom: '10px' }}>MODULE 06</p>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', color: 'var(--text)', marginBottom: '12px' }}>DriverPulse</h1>
          <p style={{ color: 'var(--text3)', fontSize: '15px', lineHeight: '1.7' }}>Full earnings transparency for Chennai auto & cab drivers — disputes, summary & incentives.</p>
        </div>

        {/* Driver Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '18px 20px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', marginBottom: '24px', boxShadow: 'var(--shadow)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '900', color: '#fff', flexShrink: 0 }}>R</div>
          <div>
            <p style={{ fontWeight: '800', fontSize: '15px', color: 'var(--text)' }}>Rajan Kumar</p>
            <p style={{ color: 'var(--text3)', fontSize: '12px' }}>Auto Driver · Chennai · ID: CHN-4821</p>
          </div>
          <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
            <div style={{ fontSize: '18px', fontWeight: '900', color: '#d97706' }}>4.8 ⭐</div>
            <div style={{ fontSize: '11px', color: 'var(--text3)' }}>Rating</div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '12px', marginBottom: '28px' }}>
          {[
            { label: 'This Week', value: `₹${totalWeek.toLocaleString()}`, color: '#7c3aed' },
            { label: 'Total Trips', value: totalTrips, color: '#2563eb' },
            { label: 'Avg per Trip', value: `₹${Math.round(totalWeek / totalTrips)}`, color: '#16a34a' },
            { label: 'Today', value: '₹640', color: '#d97706' },
          ].map((card, i) => (
            <div key={i} style={{ padding: '20px', background: 'var(--surface)', border: '1px solid var(--border)', borderTop: `3px solid ${card.color}`, borderRadius: '10px', textAlign: 'center', boxShadow: 'var(--shadow)' }}>
              <div style={{ fontSize: '28px', fontWeight: '900', color: card.color, marginBottom: '4px' }}>{card.value}</div>
              <div style={{ fontSize: '12px', color: 'var(--text3)' }}>{card.label}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginBottom: '24px', boxShadow: 'var(--shadow)' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', marginBottom: '24px' }}>Weekly Earnings</h2>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end', height: '140px' }}>
            {earnings.map((e, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: '9px', color: '#7c3aed', fontWeight: '700' }}>₹{e.amount}</span>
                <div style={{ width: '100%', height: `${(e.amount / maxEarning) * 110}px`, background: dark ? 'linear-gradient(to top, #7c3aed, rgba(124,58,237,0.3))' : 'linear-gradient(to top, #7c3aed, #c4b5fd)', borderRadius: '4px 4px 0 0', transition: 'height 0.5s ease' }} />
                <span style={{ fontSize: '10px', color: 'var(--text3)' }}>{e.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Disputes */}
        <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', marginBottom: '14px' }}>Dispute Board</h2>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', boxShadow: 'var(--shadow)' }}>
          {disputes.map((d, i) => (
            <div key={i} style={{ padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', borderBottom: i < disputes.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '3px' }}>
                  <span style={{ color: '#7c3aed', fontSize: '12px', fontWeight: '700' }}>{d.id}</span>
                  <span style={{ color: 'var(--text3)', fontSize: '11px' }}>{d.date}</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text2)' }}>{d.issue}</p>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexShrink: 0 }}>
                <span style={{ fontWeight: '700', color: '#16a34a', fontSize: '13px' }}>{d.amount}</span>
                <span style={{ padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', background: statusBg(d.status), color: statusColor(d.status) }}>{d.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* New Dispute */}
        <div style={{ padding: '20px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', marginBottom: '24px', boxShadow: 'var(--shadow)' }}>
          <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text)', marginBottom: '12px' }}>File New Dispute</p>
          <textarea value={newDispute} onChange={e => setNewDispute(e.target.value)} placeholder="Describe your issue — e.g. wrong fare deducted at Koyambedu..." style={{ width: '100%', padding: '12px 14px', minHeight: '80px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontSize: '13px', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }} />
          <button onClick={() => { if (newDispute) setSubmitted(true); }} style={{ marginTop: '10px', padding: '10px 24px', background: submitted ? '#16a34a' : '#7c3aed', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: '700', cursor: 'pointer', fontSize: '13px' }}>
            {submitted ? '✅ Submitted to VEGA Support!' : 'Submit Dispute'}
          </button>
        </div>

        {/* Incentives */}
        <div style={{ padding: '24px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text)', marginBottom: '20px' }}>🏆 This Week's Incentives</h2>
          {[
            { target: '25 trips in a day', reward: '₹200 bonus', progress: 88 },
            { target: '4.9 rating for 7 days', reward: 'Gold Driver Badge', progress: 96 },
            { target: '100 trips this week', reward: '₹500 bonus', progress: 100 },
          ].map((inc, i) => (
            <div key={i} style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text2)' }}>{inc.target}</span>
                <span style={{ fontSize: '12px', color: '#7c3aed', fontWeight: '700' }}>{inc.reward}</span>
              </div>
              <div style={{ height: '4px', background: 'var(--bg3)', borderRadius: '2px' }}>
                <div style={{ height: '100%', width: `${Math.min(inc.progress, 100)}%`, background: inc.progress >= 100 ? '#16a34a' : '#7c3aed', borderRadius: '2px' }} />
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text3)', marginTop: '3px' }}>{inc.progress >= 100 ? '✅ Completed!' : `${inc.progress}% complete`}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DriverPulse;