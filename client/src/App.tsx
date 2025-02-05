import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gems from './components/gems.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Gems />
    </>
  )
}

export default App
