import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Outlet/>
    </div>
  )
}

export default App
