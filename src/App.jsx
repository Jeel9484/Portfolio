import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Service from './Components/Service'
import Work from './Components/Work'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className='bg-[#0e0c1e]'>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default App