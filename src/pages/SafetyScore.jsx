
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useScore } from '../context/ScoreContext.jsx'

function TrendChart({ data }){
  // Simple SVG line chart
  const w = 560, h = 180, pad = 28
  const xs = data.map((_,i)=> pad + i * ((w - 2*pad) / Math.max(1, data.length-1)))
  const ys = data.map(d => {
    const v = d.score
    const pct = (v-0) / 100
    return h - pad - pct*(h - 2*pad)
  })
  const points = xs.map((x,i)=> `${x},${ys[i]}`).join(' ')

  return (
    <svg width={w} height={h} style={{ background:'#0b1220', borderRadius:12, border:'1px solid rgba(255,255,255,0.08)' }}>
      <polyline fill="none" stroke="url(#grad2)" strokeWidth="3" points={points} />
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function SafetyScore(){
  const nav = useNavigate()
  const { score, trend, factors } = useScore()

  return (
    <div className="container">
      <div className="header">
        <div className="brand"><div className="brand-logo">📈</div> Safety Score</div>
        <button className="btn secondary" onClick={()=>nav('/dashboard')}>Back</button>
      </div>

      <div className="grid cols-2">
        <div className="card">
          <div style={{ fontSize:22, fontWeight:800 }}>Your Safety Score: {score}/100</div>
          <div className="tooltip">Healthy digital habits overall. Keep it up!</div>
          <div style={{ marginTop:14 }}>
            <TrendChart data={trend} />
          </div>
        </div>

        <div className="card" style={{ display:'grid', gap:12 }}>
          <div style={{ fontWeight:700 }}>Key Factors</div>
          <div className="grid cols-2">
            <div className="kpi">
              <div className="label">Positive language use</div>
              <div className="value">{factors.positiveLanguage}%</div>
            </div>
            <div className="kpi">
              <div className="label">Potential harmful attempts</div>
              <div className="value">{factors.harmfulAttempts} this week</div>
            </div>
            <div className="kpi">
              <div className="label">Engagement with support</div>
              <div className="value">{factors.supportEngagement} conversations</div>
            </div>
          </div>

          <div className="grid">
            <div style={{ fontWeight:700 }}>Recommendations</div>
            <ul>
              <li>Pause and re-read messages before sending.</li>
              <li>Try a breathing exercise if you feel heated.</li>
              <li>Reach out to a counselor if something keeps bothering you.</li>
            </ul>
            <div className="footer-bar">
              <a className="btn" href="/chat">Talk to GuardianBot</a>
              <a className="btn secondary" href="/resources">Explore resources</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
