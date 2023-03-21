import { Navbar } from "flowbite-react"
import About from "../pages/about"

import { Dropdown } from "flowbite-react"
import { Link } from "react-router-dom"
export default function Flownavbar(){
    return(
        <>
<div className="md-4">
<Navbar
    fluid={true}
    rounded={true}
    className="bg-yellow-500"
  >

    <img
      src="tod.jpeg"
      className="h-16 "
      alt="Flowbite Logo"
    /> 
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
    <b>THE OPENED DOOR</b>
    </span>
  
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link
        href="/navbars"
        active={true}
      >
       <Link to="/">Home</Link>
      </Navbar.Link>
      <Navbar.Link><Link to="/about">About</Link></Navbar.Link>
     
      
      
       
     
        
        <Navbar.Link
        href="/navbars"
        active={true}
      >
       <Link to="/facility">Facility</Link>
      </Navbar.Link>
      
      <Navbar.Link
        href="/navbars"
        active={true}
      >
       <Link to="/">Festivals</Link>
      </Navbar.Link>
      <Navbar.Link href="/navbars">
      <Link to="/contact">Contact</Link>
      </Navbar.Link>
    </Navbar.Collapse>
    
  </Navbar>
  </div>
 </>   )
  
}