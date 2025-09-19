import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import History from './components/History'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import OurApproach from './components/OurApproach'
import FocusedOn from './components/FocusedOn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='first_Section'>
        <Navbar />
        {/* <Hero /> */}
      </section>
      <section className='second_Section lato-regular'>
        <History/>
        <Featured />
      </section>
      <section className='second_Section lato-regular'>
        <OurApproach />
        <FocusedOn />
      </section>
      
      
    </>
  )
}

export default App
