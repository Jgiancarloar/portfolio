import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {

  return (
    <main className='flex flex-col font-outfit'>
      <Hero />
      <Projects />
      <Contact />
    </main>
  )
}

export default App