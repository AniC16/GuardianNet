import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
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
    <div className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="text-side">
          <div className="brand-row">
            <div className="brand-logo big-glow">🛡️</div>
            <h1 className="brand-name">GuardianNet</h1>
          </div>

          <h2 className="tagline">A safer digital space for every student</h2>
          <p className="desc">
            GuardianNet helps students get support and encourages healthy digital habits.
            Your privacy matters — all conversations are confidential and follow
            <span className="highlight"> COPPA </span> &
            <span className="highlight"> FERPA </span> guidelines.
          </p>

          <Link to="/counselor" className="btn ghost alt">I’m a counselor</Link>
        </div>

        <div className="form-side">
          <form onSubmit={onSubmit} className="login-form glass">
            <h3>Student Login</h3>
            <input
              className="input"
              placeholder="Student email (e.g. alex@school.edu)"
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
            <button className="btn full primary" type="submit">Login</button>
            <div className="tooltip">
              GuardianNet never shares your conversations without consent.
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
