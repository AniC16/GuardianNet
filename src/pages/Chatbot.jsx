
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import ChatBubble from '../components/ChatBubble.jsx'
import { analyzeMessageDraft, botReply } from '../utils/chatbot.js'
import { useScore } from '../context/ScoreContext.jsx'

export default function Chatbot(){
  const { user } = useAuth()
  const nav = useNavigate()
  const { adjustScore } = useScore()
  const [messages, setMessages] = useState([
    { role:'bot', text: 'Hi! I’m GuardianBot. Your conversations here are private and confidential.' },
    { role:'bot', text: 'How can I support you today?' },
  ])
  const [text, setText] = useState('')
  const [flagModal, setFlagModal] = useState(false)
  const pendingRef = useRef('')
  const chatRef = useRef(null)

  useEffect(()=>{
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior:'smooth' })
  },[messages, flagModal])

  const handleSend = () => {
    const trimmed = text.trim()
    if(!trimmed) return
    if (analyzeMessageDraft(trimmed)) {
      pendingRef.current = trimmed
      setFlagModal(true)
      return
    }
    pushMessage(trimmed)
  }

  const pushMessage = (t) => {
    setMessages(prev => [...prev, { role:'user', text: t }])
    setText('')
    // Simulate bot thinking
    setTimeout(()=>{
      const reply = botReply(t)
      setMessages(prev => [...prev, { role:'bot', text: reply }])
    }, 500)
  }

  const confirmSendAnyway = () => {
    setFlagModal(false)
    const t = pendingRef.current
    pendingRef.current = ''
    setMessages(prev => [...prev, { role:'user', text: t }])
    // Slight negative impact on score to simulate feedback
    adjustScore(-2)
    setTimeout(()=>{
      setMessages(prev => [...prev, { role:'bot', text: 'Thanks for pausing to reconsider. If you’d like, I can share tips for de-escalating conflicts.' }])
    }, 500)
  }

  return (
    <div className="container">
      <div className="header">
        <div className="brand"><div className="brand-logo">🤖</div> GuardianBot</div>
        <div style={{ display:'flex', gap:8 }}>
          <button className="btn secondary" onClick={()=>nav('/dashboard')}>Back to Dashboard</button>
        </div>
      </div>

      <div className="card">
        <div className="tooltip" style={{ marginBottom:8 }}>Your conversations here are private and confidential.</div>
        <div ref={chatRef} className="chat">
          {messages.map((m, idx)=>(
            <ChatBubble key={idx} role={m.role} text={m.text} />
          ))}
        </div>

        <div className="footer-bar">
          <input
            className="input"
            placeholder="Type a message…"
            value={text}
            onChange={e=>setText(e.target.value)}
            onKeyDown={e=>{ if(e.key === 'Enter') handleSend() }}
          />
          <button className="btn" onClick={handleSend}>Send</button>
        </div>

        <div className="chips" style={{ marginTop:8 }}>
          <button className="chip" onClick={()=>setText('I want to report bullying')}>I want to report bullying</button>
          <button className="chip" onClick={()=>setText('I’m feeling stressed')}>I’m feeling stressed</button>
          <button className="chip" onClick={()=>setText('How can I stay safe online?')}>How can I stay safe online?</button>
        </div>
      </div>

      {flagModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>Are you sure you want to send this?</h3>
            <p className="tooltip">You might want to rethink the language. Kind messages help conversations go better.</p>
            <div className="footer-bar">
              <button className="btn secondary" onClick={()=> setFlagModal(false)}>Edit Message</button>
              <button className="btn" onClick={confirmSendAnyway}>Send Anyway</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
