import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RetosSolucion from './pages/retos/RetosSolucion.jsx'
import Login from './pages/login/Login.jsx'


const Router = (<BrowserRouter>
  <Routes>
    <Route path="" element={<Login />} />
    <Route path="/home" element={<App />} />
    <Route path="/login" element={<Login />} />
    <Route path="/retoSolucion/:id" element={<RetosSolucion />} />
  </Routes>
</BrowserRouter>)

ReactDOM.createRoot(document.getElementById('root')).render(Router)
