import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import All_DestinationContext from './context/All_DestinationContext'
import DetailsContext from './context/DetailsContext'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <All_DestinationContext>
        <DetailsContext>
        <App />
        </DetailsContext>
      </All_DestinationContext>
    </BrowserRouter>
 )
