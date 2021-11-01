import React from 'react'
import Intro from './components/intro/Intro.js'
import AboutMe from './components/aboutme/AboutMe.js'
import Contact from './components/contact/Contact.js'
import Navbar from './components/navbar/Navbar.js'
import SideProjects from './components/sideprojects/SideProjects.js'
import './app.scss'

const App = () => {
  return (
    <div className='app' >
      <Navbar />
      {/* Hello, and welcome to Matthew's portfolio. This is a work in progress. */}
      <div className='section'>
        <Intro />
        <AboutMe />
        <SideProjects />
        <Contact />
      </div>
      
    </div>
  )
}

export default App
