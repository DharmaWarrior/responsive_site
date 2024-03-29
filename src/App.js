import React from 'react'

import {Navbar, CTA } from './components'
import {Header } from './containers'

import './App.css'




const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <CTA />
    </div>
  )
}

export default App