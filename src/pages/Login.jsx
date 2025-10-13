
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()
  const { login } = useAuth()

  const onSubmit = (e) => {
    e.preventDefault()
    const name = email.split('@')[0] || 'Student'
    login(name, 'student')
    nav('/dashboard')
  }

  return (
    <div className="container" style={{ maxWidth: 760 }}>
      <div className="card">
        <div className="header">
          <div className="brand">
            <div className="brand-logo">🛡️</div>
            <div>GuardianNet</div>
          </div>
          <Link to="/counselor" className="btn ghost">I’m a counselor</Link>
        </div>

        <h1 style={{ margin:'6px 0 0', fontSize:28 }}>A safer digital space for every student</h1>
        <p style={{ color:'var(--muted)', marginTop:8 }}>
          GuardianNet helps students get support and encourages healthy digital habits. 
          Your privacy matters—conversations are confidential and follow COPPA & FERPA guidelines.
        </p>

        <form onSubmit={onSubmit} style={{ marginTop:20, display:'grid', gap:12 }}>
          <input className="input" placeholder="Student email (e.g. alex@school.edu)" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <button className="btn" type="submit">Login</button>
        </form>

        <div className="tooltip" style={{ marginTop:10 }}>
          GuardianNet never shares your conversations without consent and follows COPPA & FERPA guidelines.
        </div>
      </div>
    </div>
  )
}
