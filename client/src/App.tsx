import { useState, Route, Routes } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gems from './components/gems.tsx'
import Levels from './components/levels.tsx'
import Store from './components/store.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Levels /> */}
      <Store />
      {/* <Gems /> */}
    </>

  )
}

export default App
