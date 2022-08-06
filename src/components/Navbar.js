import React, {useState} from "react";
import { icons } from "react-icons";
import './Nav.css'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import {CgMenuGridR} from 'react-icons/cg'

const Navbar = () => {
const [click,setClick] = useState(false)

const handleClick = () => {
   setClick(!click) 
}
    

return(
<div className="navbar">
    <div className="container">
     <h1><span><BsFillHouseFill/>Real</span>Estate</h1>
     <button className="btn">Sign in</button>
     <ul className={click ? 'nav-menu active' : 'nav-menu'} >
     <li><a href="#">Home</a></li>
     <li><a href="#">Search</a></li>
     <li><a href="#">About</a></li>
     <li><a href="#">Contact</a></li>
     </ul>
     <div className="hamburger" onClick={handleClick}>
         {click ? (<FaRegTimesCircle/>) : ( <CgMenuGridR className="icon"/>)}

         
    </div>
    </div>
</div>
)}
    
export default Navbar