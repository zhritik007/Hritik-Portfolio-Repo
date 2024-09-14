import { useState } from 'react'
import Header from './components/Header/Header'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
 

  return (
    <>
     <Header />
     <Skills />
     <Projects />
     <About />
     <Contact />
    </>
  )
}

export default App
