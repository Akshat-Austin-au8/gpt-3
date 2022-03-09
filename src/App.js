import React from 'react'
import './App.css'

import { Footer, Header, Blog, Possibility, Features, WhatGPT3} from './container'
import { Cta, Brand, Navbar } from './components'

// figma link: https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3?node-id=0%3A15 

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />  
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
