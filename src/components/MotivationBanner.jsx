// MotivationBanner.jsx
import React from 'react'

export default function MotivationBanner({ streak = 5 }) {
  const quotes = [
    "Small steps every day make big change.",
    "Your digital habits define your mindset.",
    "Progress > perfection — keep going!"
  ]
  const quote = quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <div className="motivation-banner">
      <div className="streak">🔥 {streak}-day streak</div>
      <p>{quote}</p>
    </div>
  )
}
