import { useState } from 'react'
import Header from "./components/header/Header"
import StudentInfo from './components/studentInfo/StudentInfo'
import Footer from "./components/footer/Footer"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <StudentInfo ht="Tran Huynh Minh Kiet" mssv = "23696901" lop = "DHKTPM19B"></StudentInfo>
      <Footer></Footer>
    </>
  )
}

export default App