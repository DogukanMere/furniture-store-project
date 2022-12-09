import React from 'react'
import './App.css'
import './index.css'
import Navigation from './pages/Navigation'
import Main from './pages/Main'
import Bottom from './pages/Bottom'

function App() {

  return (
    <div className="max-w-[1440px] text-[12px] relative">
      <Navigation />
      <Main />
      <Bottom />
    </div>
  )
}

export default App
