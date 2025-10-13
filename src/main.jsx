
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'
import { AuthProvider } from './context/AuthContext.jsx'
import { ScoreProvider } from './context/ScoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ScoreProvider>
          <App />
        </ScoreProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
