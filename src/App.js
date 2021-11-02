import React, {useState} from 'react'
import Intro from './components/intro/Intro.js'
import AboutMe from './components/aboutme/AboutMe.js'
import Contact from './components/contact/Contact.js'
import Navbar from './components/navbar/Navbar.js'
import SideProjects from './components/sideprojects/SideProjects.js'
import './app.scss'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app' >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
