
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { flaggedFeed, mockStudents } from '../utils/data.js'

export default function CounselorDashboard(){
  const nav = useNavigate()
  return (
    <div className="container">
      <div className="header">
        <div className="brand"><div className="brand-logo">🧑‍🏫</div> Counselor Dashboard</div>
        <button className="btn secondary" onClick={()=>nav('/counselor')}>Logout</button>
      </div>

      <div className="grid cols-2">
        <div className="card">
          <div style={{ fontWeight:700, marginBottom:8 }}>Student Overview</div>
          <table className="table">
            <thead>
              <tr><th>Name</th><th>Safety Score</th><th>Last Chat</th><th>Alerts</th></tr>
            </thead>
            <tbody>
              {mockStudents.map((s,i)=>(
                <tr key={i}>
                  <td>{s.name}</td>
                  <td>{s.score}</td>
                  <td>{s.lastChat}</td>
                  <td>{s.alerts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <div style={{ fontWeight:700, marginBottom:8 }}>Flagged Messages (Anonymized)</div>
          <div className="grid">
            {flaggedFeed.map(item => (
              <div key={item.id} className="kpi">
                <div className="label">{item.time}</div>
                <div className="value" style={{ fontSize:16 }}>{item.preview}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid cols-2" style={{ marginTop:16 }}>
        <div className="card">
          <div style={{ fontWeight:700, marginBottom:8 }}>Intervention Planner</div>
          <p className="tooltip">Schedule check-ins or follow-ups (demo only).</p>
          <div className="grid cols-2">
            <input className="input" placeholder="Student name" />
            <input className="input" placeholder="Date & time" />
          </div>
          <div style={{ marginTop:8 }}>
            <button className="btn">Add</button>
          </div>
        </div>

        <div className="card">
          <div style={{ fontWeight:700, marginBottom:8 }}>Trends and Reports</div>
          <p className="tooltip">Aggregate metrics (mocked).</p>
          <div className="grid cols-3">
            <div className="kpi"><div className="label">Avg Score</div><div className="value">78</div></div>
            <div className="kpi"><div className="label">Incidents (30d)</div><div className="value">14</div></div>
            <div className="kpi"><div className="label">Students assisted</div><div className="value">22</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
