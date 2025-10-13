
import React, { useEffect, useState } from 'react'
import { tips } from '../utils/data.js'

export default function TipCarousel(){
  const [i, setI] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=> setI(prev => (prev+1) % tips.length), 3500)
    return ()=> clearInterval(t)
  },[])
  return (
    <div className="card" style={{ minHeight: 90 }}>
      <div className="header">
        <div className="brand"><div className="brand-logo">ℹ️</div> Recent tips from GuardianNet</div>
      </div>
      <div style={{ color:'#e5e7eb' }}>{tips[i]}</div>
    </div>
  )
}
