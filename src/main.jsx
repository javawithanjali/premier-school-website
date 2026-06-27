import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Achievements from './component/Achievements.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<App/>
  </StrictMode>,
)
