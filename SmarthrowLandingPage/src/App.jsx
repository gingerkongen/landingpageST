import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'


function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <section id="features">
      <FeatureSection />
      </section>
      <section id="workflow">
        <Workflow />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>      
      <Footer />
    </>
  )
}

export default App
