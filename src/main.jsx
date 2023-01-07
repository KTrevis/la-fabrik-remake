import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Header from "./components/Header/Header"

import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
