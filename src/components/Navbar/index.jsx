import React from 'react'
import './index.css'

export default function Navbar() {
  return (
    <nav className="navbar_Container">
      <h1>VADER</h1>
      <div className="navbar_Links">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#History">History</a>
        </li>
        <li>
          <a href="#Abilities">Abilities</a>
        </li>
        <li>
          <a href="#Gallery">Gallery</a>
        </li>
      </div>
      <button>Talk to Vader</button>
    </nav>
  )
}
