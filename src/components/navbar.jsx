import { Navbar } from "flowbite-react"
import About from "../pages/about"

import { Dropdown } from "flowbite-react"
import { Link } from "react-router-dom"
import { NavbarLink } from "flowbite-react/lib/esm/components/Navbar/NavbarLink"
import { NavbarToggle } from "flowbite-react/lib/esm/components/Navbar/NavbarToggle"
export default function Flownavbar(){
    return(
        <>

<div className="md-4 ">
<Navbar
    fluid={true}
    rounded={true}
   class="bg-red-800"
  >

    <img
      src="mlogo.png"
      className="h-12 w-12 mr-4 mt-4 mb-4 ml-4 "
      alt="Flowbite Logo"
    /> 
    
            <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-300   ">
    <b>THE OPENED DOOR</b>
    </span>
  
    <Navbar.Toggle />
    <Navbar.Collapse>
    <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</a>

<a href="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>

<a href="/facility" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Facility</a>

<a href="/work" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Our Work</a>

<a href="/academics" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Academics</a>

<a href="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
      
    </Navbar.Collapse>
   
    
  </Navbar>
  </div>
 </>   )
  
}