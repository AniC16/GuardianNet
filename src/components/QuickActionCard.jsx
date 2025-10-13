
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function QuickActionCard({ icon, title, desc, to }){
  const nav = useNavigate()
  return (
    <div className="kpi" style={{ display:'grid', gap:8 }}>
      <div className="label">{icon} {title}</div>
      <div style={{ color:'#e5e7eb' }}>{desc}</div>
      <div>
        <button className="btn" onClick={()=> nav(to)}>Open</button>
      </div>
    </div>
  )
}
