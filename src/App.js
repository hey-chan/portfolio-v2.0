import React, {useState} from 'react'
import Intro from './components/intro/Intro.js'
import AboutMe from './components/aboutme/AboutMe.js'
import Contact from './components/contact/Contact.js'
import Navbar from './components/navbar/Navbar.js'
import './app.scss'
import Menu from './components/menubar/Menu.jsx'
import Projects from './components/projects/Projects.jsx'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app' >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* Hello, and welcome to Matthew's portfolio. This is a work in progress. */}
      <div className='section'>
        <Intro />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
      
    </div>
  )
}

export default App

// Huge appreciation to Lama Dev for the portfolio inspiration