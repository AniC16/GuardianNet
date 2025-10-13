
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Chatbot from './pages/Chatbot.jsx'
import SafetyScore from './pages/SafetyScore.jsx'
import Resources from './pages/Resources.jsx'
import CounselorLogin from './pages/CounselorLogin.jsx'
import CounselorDashboard from './pages/CounselorDashboard.jsx'
import { useAuth } from './context/AuthContext.jsx'

export default function App() {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/chat" element={user ? <Chatbot /> : <Navigate to="/login" />} />
      <Route path="/score" element={user ? <SafetyScore /> : <Navigate to="/login" />} />
      <Route path="/resources" element={user ? <Resources /> : <Navigate to="/login" />} />

      <Route path="/counselor" element={<CounselorLogin />} />
      <Route path="/counselor/dashboard" element={<CounselorDashboard />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
