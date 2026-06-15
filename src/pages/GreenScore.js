import React, { useState } from 'react';

const trips = [
  { date: 'Today', mode: '🚇 Chennai Metro', co2Saved: 2.4, points: 24, distance: '12 km' },
  { date: 'Yesterday', mode: '🚌 MTC Bus 21C', co2Saved: 1.8, points: 18, distance: '9 km' },
  { date: 'Mon', mode: '🚇 Metro + 🚌 MTC Bus', co2Saved: 3.2, points: 32, distance: '16 km' },
  { date: 'Sun', mode: '🚗 Ola Cab', co2Saved: -1.2, points: 0, distance: '8 km' },
  { date: 'Sat', mode: '🚇 Chennai Metro', co2Saved: 2.1, points: 21, distance: '10 km' },
];

const rewards = [
  { name: 'Free Metro Pass', points: 500, icon: '🎫' },
  { name: '₹50 MTC Bus Credit', points: 300, icon: '🚌' },
  { name: 'Chai Pe Charcha', points: 200, icon: '🍵' },
  { name: 'Green Yodha Badge', points: 100, icon: '🏅' },
];

function GreenScore({ theme }) {
  const [totalPoints] = useState(847);
  const [redeemed, setRedeemed] = useState(null);
  const dark = theme === 'dark';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px' }}>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#15803d', fontWeight: '700', marginBottom: '10px' }}>MODULE 03</p>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', color: 'var(--text)', marginBottom: '12px' }}>GreenScore</h1>
          <p style={{ color: 'var(--text3)', fontSize: '15px', lineHeight: '1.7' }}>Track CO₂ savings every trip and earn GreenCoins redeemable for Chennai transit rewards.</p>
        </div>

        {/* Score Card */}
        <div style={{ background: dark ? 'rgba(21,128,61,0.08)' : '#f0fdf4', border: '1px solid rgba(21,128,61,0.2)', borderRadius: '12px', padding: '40px', marginBottom: '28px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '24px', textAlign: 'center' }}>
          {[
            { val: totalPoints, label: 'GreenCoins Earned', color: '#16a34a' },
            { val: '8.3 kg', label: 'CO₂ Saved This Week', color: '#15803d' },
            { val: '🥈', label: 'Silver Yodha Badge', color: 'var(--text)' },
          ].map((item, i) => (
            <div key={i}>
              <div style={{ fontSize: '44px', fontWeight: '900', color: item.color, marginBottom: '6px' }}>{item.val}</div>
              <div style={{ color: 'var(--text3)', fontSize: '12px' }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Trips */}
        <h2 style={{ fontSize: '17px', fontWeight: '800', color: 'var(--text)', marginBottom: '14px' }}>Trip History</h2>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '28px', boxShadow: 'var(--shadow)' }}>
          {trips.map((trip, i) => (
            <div key={i} style={{ padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i < trips.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <span style={{ color: 'var(--text3)', fontSize: '12px', minWidth: '65px' }}>{trip.date}</span>
                <span style={{ fontSize: '14px', color: 'var(--text2)' }}>{trip.mode}</span>
                <span style={{ color: 'var(--text3)', fontSize: '12px' }}>{trip.distance}</span>
              </div>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <span style={{ color: trip.co2Saved > 0 ? '#16a34a' : '#dc2626', fontWeight: '700', fontSize: '13px' }}>{trip.co2Saved > 0 ? '+' : ''}{trip.co2Saved} kg</span>
                <span style={{ padding: '3px 8px', background: trip.points > 0 ? (dark ? 'rgba(22,163,74,0.12)' : '#f0fdf4') : 'var(--bg2)', borderRadius: '6px', fontSize: '12px', color: trip.points > 0 ? '#16a34a' : 'var(--text3)', fontWeight: '600' }}>+{trip.points}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Rewards */}
        <h2 style={{ fontSize: '17px', fontWeight: '800', color: 'var(--text)', marginBottom: '14px' }}>Redeem Rewards</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '12px' }}>
          {rewards.map((r, i) => (
            <div key={i} style={{ padding: '24px', textAlign: 'center', background: redeemed === i ? (dark ? 'rgba(22,163,74,0.1)' : '#f0fdf4') : 'var(--surface)', border: `1px solid ${redeemed === i ? '#16a34a' : 'var(--border)'}`, borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>{r.icon}</div>
              <div style={{ fontWeight: '700', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}>{r.name}</div>
              <div style={{ color: '#16a34a', fontSize: '12px', marginBottom: '14px' }}>{r.points} coins</div>
              <button onClick={() => setRedeemed(i)} disabled={totalPoints < r.points} style={{ width: '100%', padding: '8px', background: redeemed === i ? '#16a34a' : (totalPoints >= r.points ? (dark ? 'rgba(22,163,74,0.12)' : '#f0fdf4') : 'var(--bg2)'), border: `1px solid ${totalPoints >= r.points ? '#16a34a' : 'var(--border)'}`, borderRadius: '6px', color: redeemed === i ? '#fff' : (totalPoints >= r.points ? '#16a34a' : 'var(--text3)'), cursor: totalPoints >= r.points ? 'pointer' : 'not-allowed', fontSize: '12px', fontWeight: '700' }}>
                {redeemed === i ? '✅ Redeemed!' : 'Redeem'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GreenScore;