import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initBotId } from 'botid/client/core'
import './bullchassis.css'
import App from './App.jsx'

// Detección pasiva de bots. Solo actúa en producción (en local isBot es false).
initBotId({
  protect: [{ path: '/api/contact', method: 'POST' }],
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
