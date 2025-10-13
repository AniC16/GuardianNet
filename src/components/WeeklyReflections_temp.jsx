// WeeklyReflection.jsx
import React, { useState } from 'react'

export default function WeeklyReflection() {
  const [mood, setMood] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const moods = ['😊', '😐', '😔', '😡', '😴']

  return (
    <div className="card">
      <div style={{ fontWeight: 700, marginBottom: 8 }}>Weekly Reflection</div>
      {!submitted ? (
        <>
          <p className="tooltip">How have you been feeling this week?</p>
          <div style={{ display: 'flex', gap: 10 }}>
            {moods.map((m) => (
              <button
                key={m}
                onClick={() => {
                  setMood(m)
                  setSubmitted(true)
                }}
                className="emoji-btn"
              >
                {m}
              </button>
            ))}
          </div>
        </>
      ) : (
        <p>Thanks for sharing! You logged your mood as {mood}</p>
      )}
    </div>
  )
}
