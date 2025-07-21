import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import All_DestinationContext from './context/All_DestinationContext'
import DetailsContext from './context/DetailsContext'
import AuthContext from './context/AuthContext'
import AddToListContext from './context/AddToList'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <All_DestinationContext>
      <DetailsContext>
        <AuthContext>
          <AddToListContext>
          <App />
          </AddToListContext>
        </AuthContext>
      </DetailsContext>
    </All_DestinationContext>
  </BrowserRouter>
)
