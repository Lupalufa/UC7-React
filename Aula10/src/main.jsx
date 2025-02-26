import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './components/Footer/index.jsx'
import Header from './components/Header/index.jsx'
import Main from './components/Main/index.jsx'
import Home from './pages/Home/index.jsx'
import Contato from './pages/Contato/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)