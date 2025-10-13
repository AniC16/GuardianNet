// CommunityHighlights.jsx
import React from 'react'

export default function CommunityHighlights() {
  const posts = [
    { user: 'Anonymous', msg: 'Spoke up for a friend today 💪' },
    { user: 'Anonymous', msg: 'Took a day off social media and felt great.' },
  ]

  return (
    <div className="card">
      <div style={{ fontWeight: 700, marginBottom: 8 }}>Community Highlights</div>
      {posts.map((p, i) => (
        <div key={i} className="bubble bot" style={{ marginBottom: 10 }}>
          <strong>{p.user}</strong>: {p.msg}
        </div>
      ))}
    </div>
  )
}
