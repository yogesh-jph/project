import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Flownavbar from './components/navbar'

import Fcard from './components/card'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'

import Flowcrousal from './components/crousal'
import Ffooter from './components/footer'
import Festivals from './pages/festivals'
import Facility from './pages/facility'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    

  <BrowserRouter>
 
  
  <Flownavbar></Flownavbar>
 <Flowcrousal></Flowcrousal>
  

  <Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/about" element={<About />}></Route>
<Route path="/contact" element={<Contact />}></Route>
<Route path="/festivals" element={<Festivals />}></Route>
<Route path="/facility" element={<Facility />}></Route>



</Routes>

</BrowserRouter>
<Ffooter> </Ffooter>

</>

 


   
   
  )
}

export default App

 