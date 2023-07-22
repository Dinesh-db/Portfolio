import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile'
import Skills from './Components/Skills/skills'
import Project from "./Components/Projects/Project"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app-container'>
      <Navbar/>
      <Profile/>
      <Skills/>
      <Project/>
    </div>
    <div className='footer'>
      <p>Designed and Developed by Dinesh Babu</p>
    </div>
    </>
  )
}

export default App
