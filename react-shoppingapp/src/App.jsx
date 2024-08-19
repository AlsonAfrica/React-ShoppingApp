import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './components/LandingPage'
import HomePage from "./components/HomePage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/HomePage" element={<HomePage/>}/>
      </Routes>
    </Router>
  )
}

export default App

