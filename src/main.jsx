import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import HouseContextProvider from './Context/HouseContext.jsx'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HouseContextProvider>
      <Router>
        <App />
      </Router>
    </HouseContextProvider>
  </React.StrictMode>,
)
