
import React from 'react'

export default function ChatBubble({ role='bot', text }){
  return (
    <div className={`bubble ${role === 'user' ? 'user' : 'bot'}`}>
      {text}
    </div>
  )
}
