import React, { useState } from 'react';

const trips = [
  { date: 'Today', mode: '🚇 Metro', co2Saved: 2.4, points: 24, distance: '12 km' },
  { date: 'Yesterday', mode: '🚌 Bus', co2Saved: 1.8, points: 18, distance: '9 km' },
  { date: 'Mon', mode: '🚇 Metro + 🚌 Bus', co2Saved: 3.2, points: 32, distance: '16 km' },
  { date: 'Sun', mode: '🚗 Cab', co2Saved: -1.2, points: 0, distance: '8 km' },
  { date: 'Sat', mode: '🚇 Metro', co2Saved: 2.1, points: 21, distance: '10 km' },
];

const rewards = [
  { name: 'Free Metro Pass', points: 500, icon: '🎫' },
  { name: '₹50 Bus Credit', points: 300, icon: '🚌' },
  { name: 'Coffee Voucher', points: 200, icon: '☕' },
  { name: 'Green Badge', points: 100, icon: '🏅' },
];

function GreenScore() {
  const [totalPoints] = useState(847);
  const [redeemed, setRedeemed] = useState(null);

  return (
    <div style={{ minHeight: '100vh', background: '#050a14', paddingTop: '100px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>

        <div style={{ marginBottom: '48px' }}>
          <p style={{ color: '#4caf50', letterSpacing: '4px', fontSize: '12px', marginBottom: '12px' }}>MODULE 03</p>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: '900', marginBottom: '16px' }}>GreenScore</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: '1.7' }}>
            Track your CO₂ savings per trip and earn GreenCoins redeemable for transit passes and rewards.
          </p>
        </div>

        {/* Score Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(76,175,80,0.15), rgba(26,158,122,0.1))',
          border: '1px solid rgba(76,175,80,0.4)',
          borderRadius: '24px',
          padding: '40px',
          marginBottom: '32px',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '24px',
          textAlign: 'center',
        }}>
          <div>
            <div style={{ fontSize: '56px', fontWeight: '900', color: '#4caf50' }}>{totalPoints}</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>GreenCoins Earned</div>
          </div>
          <div>
            <div style={{ fontSize: '56px', fontWeight: '900', color: '#1a9e7a' }}>8.3</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>kg CO₂ Saved This Week</div>
          </div>
          <div>
            <div style={{ fontSize: '56px', fontWeight: '900', color: '#81c784' }}>🥈</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Silver Commuter Badge</div>
          </div>
        </div>

        {/* Trip History */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '16px' }}>Trip History</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {trips.map((trip, i) => (
              <div key={i} style={{
                padding: '16px 20px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', minWidth: '60px' }}>{trip.date}</span>
                  <span style={{ fontSize: '14px' }}>{trip.mode}</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>{trip.distance}</span>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <span style={{
                    color: trip.co2Saved > 0 ? '#4caf50' : '#f44336',
                    fontWeight: '700', fontSize: '14px',
                  }}>
                    {trip.co2Saved > 0 ? '+' : ''}{trip.co2Saved} kg
                  </span>
                  <span style={{
                    padding: '4px 10px',
                    background: trip.points > 0 ? 'rgba(76,175,80,0.2)' : 'rgba(255,255,255,0.05)',
                    borderRadius: '10px',
                    fontSize: '13px',
                    color: trip.points > 0 ? '#4caf50' : 'rgba(255,255,255,0.3)',
                  }}>+{trip.points} pts</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rewards */}
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '16px' }}>Redeem Rewards</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            {rewards.map((r, i) => (
              <div key={i} style={{
                padding: '24px',
                background: redeemed === i ? 'rgba(76,175,80,0.15)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${redeemed === i ? '#4caf50' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '16px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{r.icon}</div>
                <div style={{ fontWeight: '700', marginBottom: '8px', fontSize: '14px' }}>{r.name}</div>
                <div style={{ color: '#4caf50', fontSize: '13px', marginBottom: '16px' }}>{r.points} coins</div>
                <button
                  onClick={() => setRedeemed(i)}
                  disabled={totalPoints < r.points}
                  style={{
                    width: '100%', padding: '8px',
                    background: redeemed === i ? '#4caf50' : totalPoints >= r.points ? 'rgba(76,175,80,0.2)' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${totalPoints >= r.points ? '#4caf50' : 'rgba(255,255,255,0.1)'}`,
                    borderRadius: '8px',
                    color: totalPoints >= r.points ? '#fff' : 'rgba(255,255,255,0.3)',
                    cursor: totalPoints >= r.points ? 'pointer' : 'not-allowed',
                    fontSize: '13px', fontWeight: '700',
                  }}>
                  {redeemed === i ? '✅ Redeemed!' : 'Redeem'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreenScore;