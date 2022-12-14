import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Something from './pages/Something'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>App Js</h1>
      <Something/>
     <Outlet/>
    </div>
  )
}

export default App
