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

function GreenScore() {
  const [totalPoints] = useState(847);
  const [redeemed, setRedeemed] = useState(null);

  return (
    <div style={{ minHeight: '100vh', background: '#020a06', paddingTop: '100px' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(134,239,172,0.08) 0%, transparent 70%)', top: '0%', right: '0%', animation: 'flow 12s ease-in-out infinite', filter: 'blur(60px)' }} />
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 24px', position: 'relative', zIndex: 1 }}>
        <p style={{ color: '#86efac', letterSpacing: '4px', fontSize: '11px', marginBottom: '12px' }}>MODULE 03</p>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: '900', marginBottom: '16px', background: 'linear-gradient(135deg, #fff, #86efac)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>GreenScore</h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '16px', lineHeight: '1.7', marginBottom: '48px' }}>
          Track CO₂ savings every trip and earn GreenCoins redeemable for Chennai transit rewards.
        </p>

        <div style={{ background: 'linear-gradient(135deg, rgba(74,222,128,0.08), rgba(134,239,172,0.05))', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '28px', padding: '48px', marginBottom: '32px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '32px', textAlign: 'center', backdropFilter: 'blur(20px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #4ade80, transparent)' }} />
          {[
            { val: totalPoints, label: 'GreenCoins Earned', color: '#4ade80' },
            { val: '8.3 kg', label: 'CO₂ Saved This Week', color: '#86efac' },
            { val: '🥈', label: 'Silver Yodha Badge', color: '#fff' },
          ].map((item, i) => (
            <div key={i}>
              <div style={{ fontSize: '52px', fontWeight: '900', color: item.color, marginBottom: '8px', textShadow: `0 0 20px ${item.color}50` }}>{item.val}</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>{item.label}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '16px' }}>Trip History</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
          {trips.map((trip, i) => (
            <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(74,222,128,0.08)', borderRadius: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px', minWidth: '65px' }}>{trip.date}</span>
                <span style={{ fontSize: '14px' }}>{trip.mode}</span>
                <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>{trip.distance}</span>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <span style={{ color: trip.co2Saved > 0 ? '#4ade80' : '#f87171', fontWeight: '700', fontSize: '14px' }}>
                  {trip.co2Saved > 0 ? '+' : ''}{trip.co2Saved} kg
                </span>
                <span style={{ padding: '4px 10px', background: trip.points > 0 ? 'rgba(74,222,128,0.12)' : 'rgba(255,255,255,0.04)', borderRadius: '10px', fontSize: '12px', color: trip.points > 0 ? '#4ade80' : 'rgba(255,255,255,0.25)' }}>
                  +{trip.points} pts
                </span>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '16px' }}>Redeem Rewards</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
          {rewards.map((r, i) => (
            <div key={i} style={{ padding: '28px', textAlign: 'center', background: redeemed === i ? 'rgba(74,222,128,0.1)' : 'rgba(255,255,255,0.02)', border: `1px solid ${redeemed === i ? '#4ade80' : 'rgba(74,222,128,0.1)'}`, borderRadius: '20px', transition: 'all 0.3s ease' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{r.icon}</div>
              <div style={{ fontWeight: '700', marginBottom: '6px', fontSize: '14px' }}>{r.name}</div>
              <div style={{ color: '#4ade80', fontSize: '13px', marginBottom: '16px' }}>{r.points} coins</div>
              <button onClick={() => setRedeemed(i)} disabled={totalPoints < r.points} style={{ width: '100%', padding: '9px', background: redeemed === i ? 'linear-gradient(135deg, #4ade80, #16a34a)' : totalPoints >= r.points ? 'rgba(74,222,128,0.12)' : 'rgba(255,255,255,0.04)', border: `1px solid ${totalPoints >= r.points ? '#4ade80' : 'rgba(255,255,255,0.06)'}`, borderRadius: '10px', color: totalPoints >= r.points ? (redeemed === i ? '#020a06' : '#4ade80') : 'rgba(255,255,255,0.2)', cursor: totalPoints >= r.points ? 'pointer' : 'not-allowed', fontSize: '13px', fontWeight: '700' }}>
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