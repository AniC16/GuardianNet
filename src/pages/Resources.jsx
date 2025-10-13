
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { resources, hotlineLinks } from '../utils/data.js'

export default function Resources(){
  const nav = useNavigate()

  return (
    <div className="container">
      <div className="header">
        <div className="brand"><div className="brand-logo">📚</div> Resources</div>
        <button className="btn secondary" onClick={()=>nav('/dashboard')}>Back</button>
      </div>

      <div className="grid cols-3">
        {resources.map((r, i)=>(
          <div key={i} className="card">
            <div style={{ fontWeight:700, marginBottom:4 }}>{r.title}</div>
            <div style={{ color:'var(--muted)', marginBottom:10 }}>{r.summary}</div>
            <button className="btn">Read</button>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop:16 }}>
        <div style={{ fontWeight:700, marginBottom:8 }}>External links</div>
        <div className="chips">
          {hotlineLinks.map((h,i)=>(
            <a key={i} className="chip" href={h.href} target="_blank" rel="noreferrer">{h.label}</a>
          ))}
        </div>
      </div>
    </div>
  )
}
