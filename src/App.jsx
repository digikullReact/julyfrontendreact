import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Something from './pages/Something'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>App Js</h1>
      <Link to={"/callback"}>
        Callback
      </Link>

      <Link to={"/memo"}>
        Memo
      </Link>
      <Something/>
     <Outlet/>
    </div>
  )
}

export default App
