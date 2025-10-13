
import React from 'react'

export default function ProgressCircle({ value=82, size=140, stroke=12, label='Safety Score' }){
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const clamped = Math.max(0, Math.min(100, value))
  const offset = circumference - (clamped / 100) * circumference

  return (
    <div style={{ display:'grid', placeItems:'center' }}>
      <svg width={size} height={size}>
        <circle
          stroke="rgba(255,255,255,0.08)"
          fill="transparent"
          strokeWidth={stroke}
          r={radius}
          cx={size/2}
          cy={size/2}
        />
        <circle
          stroke="url(#grad)"
          fill="transparent"
          strokeLinecap="round"
          strokeWidth={stroke}
          r={radius}
          cx={size/2}
          cy={size/2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition:'stroke-dashoffset .6s ease' }}
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="100%" stopColor="#93c5fd" />
          </linearGradient>
        </defs>
      </svg>
      <div style={{ marginTop:-size/2.2, textAlign:'center' }}>
        <div style={{ fontSize:26, fontWeight:800 }}>{clamped}/100</div>
        <div className="tooltip">{label}</div>
      </div>
    </div>
  )
}
