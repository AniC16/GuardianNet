
import React, { createContext, useContext, useState } from 'react'

const ScoreContext = createContext(null)

const initialTrend = [
  { week: 'Wk 1', score: 74 },
  { week: 'Wk 2', score: 78 },
  { week: 'Wk 3', score: 81 },
  { week: 'Wk 4', score: 82 },
]

export function ScoreProvider({ children }){
  const [score, setScore] = useState(82)
  const [trend, setTrend] = useState(initialTrend)
  const [factors, setFactors] = useState({
    positiveLanguage: 90,
    harmfulAttempts: 3,
    supportEngagement: 2
  })

  const adjustScore = (delta) => {
    const newScore = Math.max(0, Math.min(100, score + delta))
    setScore(newScore)
    const nextIndex = trend.length + 1
    setTrend(prev => [...prev, { week: `Wk ${nextIndex}`, score: newScore }])
  }

  return (
    <ScoreContext.Provider value={{ score, trend, factors, setFactors, adjustScore }}>
      {children}
    </ScoreContext.Provider>
  )
}

export const useScore = () => useContext(ScoreContext)
