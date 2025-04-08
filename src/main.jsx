import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import '@fontsource/outfit/300.css'; // Light
import '@fontsource/outfit/400.css'; // Normal
import '@fontsource/outfit/600.css'; // Semi-bold
import '@fontsource/outfit/700.css';
