import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CounselorLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    nav('/counselor/dashboard')
  }

  const goBack = () => {
    nav('/') // navigates back to the home/student login page
  }

  return (
    <div className="container" style={{ maxWidth: 760 }}>
      <div className="card">
        <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="brand">
            <div className="brand-logo">🛡️</div> GuardianNet – Counselor
          </div>
          <button onClick={goBack} className="back-btn">
            ← Back
          </button>
        </div>

        <p className="tooltip">Counselor access only</p>

        <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12 }}>
          <input
            className="input"
            placeholder="School email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
