// ActivityInsights.jsx
import React from 'react'
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { day: 'Mon', messages: 4 },
  { day: 'Tue', messages: 7 },
  { day: 'Wed', messages: 6 },
  { day: 'Thu', messages: 3 },
  { day: 'Fri', messages: 5 },
]

export default function ActivityInsights() {
  return (
    <div className="card">
      <div style={{ fontWeight: 700, marginBottom: 8 }}>Activity Insights</div>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data}>
          <XAxis dataKey="day" stroke="#9ca3af" />
          <Tooltip />
          <Bar dataKey="messages" fill="#6ee7b7" radius={[6,6,0,0]} />
        </BarChart>
      </ResponsiveContainer>
      <p className="tooltip" style={{ marginTop: 8 }}>
        Shows your chat interactions with GuardianBot this week.
      </p>
    </div>
  )
}
