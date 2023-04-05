import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <div className='min-h-[calc(100vh-136px)]'><Outlet/></div>
      <Footer></Footer>
    </div>
  )
}

export default App
