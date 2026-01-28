import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleCong(){
    setCount(count+1);
  }
  function handleTru(){
    setCount(count-1);
  }
  return (
    <>
      <button onClick={handleCong}>+</button>
      <button onClick={handleTru}>-</button>
      <h1 style={{ color: count > 10 ? 'red' : 'white' }}>{count}</h1>
    </>
  )
}

export default App
