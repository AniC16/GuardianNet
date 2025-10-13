import React from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'
import ProgressCircle from '../components/ProgressCircle.jsx'
import QuickActionCard from '../components/QuickActionCard.jsx'
import TipCarousel from '../components/TipCarousel.jsx'
import WeeklyReflections from "../components/WeeklyReflections_temp.jsx"

import MotivationBanner from '../components/MotivationBanner.jsx'
import ActivityInsights from '../components/ActivityInsights.jsx'
import CommunityHighlights from '../components/CommunityHighlights.jsx'
import { useScore } from '../context/ScoreContext.jsx'

export default function Dashboard() {
  const { user, logout } = useAuth()
  const nav = useNavigate()
  const { score } = useScore()

  return (
    <div className="container">
      <div className="header">
        <div className="brand"><div className="brand-logo">🛡️</div> GuardianNet</div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span className="tooltip">Signed in as <strong>{user?.name}</strong></span>
          <button className="btn secondary" onClick={() => nav('/score')}>View Score</button>
          <button className="btn ghost" onClick={logout}>Logout</button>
        </div>
      </div>

      <MotivationBanner streak={5} />

      <div className="grid cols-3">
        <div className="card" style={{ display:'grid', placeItems:'center' }}>
          <ProgressCircle value={score} label="Safety Score" />
          <div className="tooltip" style={{ marginTop:10, textAlign:'center' }}>
            Your score is based on overall digital well-being this week.
          </div>
        </div>

        <div className="card" style={{ display:'grid', gap:12 }}>
          <div style={{ fontSize:16, fontWeight:700 }}>Quick Actions</div>
          <div className="grid cols-1">
            <QuickActionCard icon="💬" title="Chat with GuardianBot" desc="Talk privately about bullying, stress, or anything on your mind." to="/chat" />
            <QuickActionCard icon="📚" title="Resources for Support" desc="Tips, guides, and contact options when you need help." to="/resources" />
            <QuickActionCard icon="⚠️" title="Report a Concern" desc="Share a concern—this demo submits nowhere." to="/chat" />
          </div>
        </div>

        <TipCarousel />
      </div>

      <div className="grid cols-3" style={{ marginTop: 16 }}>
        <ActivityInsights />
        <WeeklyReflections />
        <CommunityHighlights />
      </div>
    </div>
  )
}
