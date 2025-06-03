import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import ICBLabsPage from './Components/HeroSection'
import BlockchainLanding from './Components/AboutUS'
import ICBLabsEcosystem from './Components/Ecosystem'
import Contact from './Components/ContectUs'
import AnimatedGLB from './Components/AnimatedGLB'

function App() {
  return (
    <>
      <Navbar/>
      <AnimatedGLB /> {/* 3D object at the bottom */}
      <ICBLabsPage/>
      <BlockchainLanding/>
      {/* <ICBLabsEcosystem/> */}
      <Contact/>
    </>
  )
}

export default App
