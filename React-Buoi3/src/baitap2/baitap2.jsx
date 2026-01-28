import { useEffect, useState } from 'react'

export default function TapTai2() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, []) 

  const formatTime = (date) => {
    return date.toLocaleTimeString()
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Bài tập 02: Digital Clock</h2>
      <h1>{formatTime(time)}</h1>
    </div>
  )
}
