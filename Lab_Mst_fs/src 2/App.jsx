import { useState } from 'react'

import './App.css'
import Add from './components/Add'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>TO DO LIST</h1>
      <Add />
      

      
    </>
  )
}

export default App
