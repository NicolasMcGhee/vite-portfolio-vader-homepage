import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import History from './components/History'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='first_Section'>
        <Navbar />
        <Hero />
      </section>
      <section className='second_Section'>
        <History/>
      </section>
      
    </>
  )
}

export default App
