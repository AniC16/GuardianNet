
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CounselorLogin(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    nav('/counselor/dashboard')
  }

  return (
    <div className="container" style={{ maxWidth: 760 }}>
      <div className="card">
        <div className="header">
          <div className="brand"><div className="brand-logo">🛡️</div> GuardianNet – Counselor</div>
        </div>
        <p className="tooltip">Counselor access only</p>
        <form onSubmit={onSubmit} style={{ display:'grid', gap:12 }}>
          <input className="input" placeholder="School email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <button className="btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}
