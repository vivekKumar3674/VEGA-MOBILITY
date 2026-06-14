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
    <div style={{ minHeight: '100vh', background: '#050a14', paddingTop: '100px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>

        <div style={{ marginBottom: '48px' }}>
          <p style={{ color: '#9c27b0', letterSpacing: '4px', fontSize: '12px', marginBottom: '12px' }}>MODULE 06</p>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: '900', marginBottom: '16px' }}>DriverPulse</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: '1.7' }}>
            Full earnings transparency, dispute resolution, daily summaries and incentive tracking for drivers.
          </p>
        </div>

        {/* Summary Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          marginBottom: '40px',
        }}>
          {[
            { label: 'This Week', value: `₹${totalWeek.toLocaleString()}`, color: '#9c27b0' },
            { label: 'Total Trips', value: totalTrips, color: '#2196f3' },
            { label: 'Avg per Trip', value: `₹${Math.round(totalWeek / totalTrips)}`, color: '#4caf50' },
            { label: 'Rating', value: '4.8 ⭐', color: '#ff9800' },
          ].map((card, i) => (
            <div key={i} style={{
              padding: '24px',
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid rgba(255,255,255,0.08)`,
              borderRadius: '16px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: card.color, marginBottom: '8px' }}>
                {card.value}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{card.label}</div>
            </div>
          ))}
        </div>

        {/* Earnings Chart */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px',
          padding: '28px',
          marginBottom: '32px',
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '24px' }}>Weekly Earnings</h2>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end', height: '160px' }}>
            {earnings.map((e, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', height: '100%', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: '11px', color: '#9c27b0', fontWeight: '700' }}>₹{e.amount}</span>
                <div style={{
                  width: '100%',
                  height: `${(e.amount / maxEarning) * 120}px`,
                  background: `linear-gradient(to top, #9c27b0, rgba(156,39,176,0.4))`,
                  borderRadius: '6px 6px 0 0',
                  transition: 'height 0.5s ease',
                }} />
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{e.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Disputes */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px' }}>Dispute Board</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {disputes.map((d, i) => (
              <div key={i} style={{
                padding: '16px 20px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px',
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ color: '#9c27b0', fontSize: '13px', fontWeight: '700' }}>{d.id}</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>{d.date}</span>
                  </div>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>{d.issue}</p>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ fontWeight: '700', color: '#4caf50' }}>{d.amount}</span>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    background: d.status === 'Resolved' ? 'rgba(76,175,80,0.2)' : d.status === 'Pending' ? 'rgba(255,152,0,0.2)' : 'rgba(33,150,243,0.2)',
                    color: d.status === 'Resolved' ? '#4caf50' : d.status === 'Pending' ? '#ff9800' : '#2196f3',
                  }}>{d.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* New Dispute */}
          <div style={{
            padding: '20px',
            background: 'rgba(156,39,176,0.05)',
            border: '1px solid rgba(156,39,176,0.2)',
            borderRadius: '16px',
          }}>
            <p style={{ fontSize: '14px', fontWeight: '700', marginBottom: '12px' }}>File New Dispute</p>
            <textarea
              value={newDispute}
              onChange={e => setNewDispute(e.target.value)}
              placeholder="Describe your issue..."
              style={{
                width: '100%', padding: '12px 16px', minHeight: '80px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px', color: '#fff', fontSize: '14px',
                outline: 'none', resize: 'vertical', fontFamily: 'inherit',
              }}
            />
            <button
              onClick={() => { if (newDispute) setSubmitted(true); }}
              style={{
                marginTop: '12px',
                padding: '10px 24px',
                background: submitted ? 'rgba(76,175,80,0.3)' : 'rgba(156,39,176,0.3)',
                border: `1px solid ${submitted ? '#4caf50' : '#9c27b0'}`,
                borderRadius: '8px',
                color: '#fff', fontWeight: '700', cursor: 'pointer', fontSize: '14px',
              }}>
              {submitted ? '✅ Dispute Submitted!' : 'Submit Dispute'}
            </button>
          </div>
        </div>

        {/* Incentives */}
        <div style={{
          padding: '24px',
          background: 'linear-gradient(135deg, rgba(156,39,176,0.1), rgba(33,150,243,0.1))',
          border: '1px solid rgba(156,39,176,0.3)',
          borderRadius: '20px',
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px' }}>🏆 This Week's Incentives</h2>
          {[
            { target: '25 trips in a day', reward: '₹200 bonus', progress: 88 },
            { target: '4.9 rating for 7 days', reward: 'Gold Badge', progress: 96 },
            { target: '100 trips this week', reward: '₹500 bonus', reward2: true, progress: 115 > 100 ? 100 : 115 },
          ].map((inc, i) => (
            <div key={i} style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>{inc.target}</span>
                <span style={{ fontSize: '13px', color: '#9c27b0', fontWeight: '700' }}>{inc.reward}</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                <div style={{
                  height: '100%',
                  width: `${Math.min(inc.progress, 100)}%`,
                  background: inc.progress >= 100 ? '#4caf50' : 'linear-gradient(to right, #9c27b0, #2196f3)',
                  borderRadius: '3px',
                }} />
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '4px' }}>
                {inc.progress >= 100 ? '✅ Completed!' : `${inc.progress}% complete`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DriverPulse;