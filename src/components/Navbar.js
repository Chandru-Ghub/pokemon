import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../images/egg.png'
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'>
                <p>&lt;&lt;&lt;</p>
                <img src={logo} alt="" />
                <p>&gt;&gt;&gt;</p>
        </div>
            <ul>

               <li>
               <Link to={'/'} style={{color:'inherit',textDecoration:'none'}}> Home</Link>

               </li>
               <li>
               <Link style={{textDecoration:'none',color:'inherit'}} to={'/liked'}> Liked</Link>

               </li>
               <li>
               <Link style={{textDecoration:'none',color:'inherit'}} to={'/list'}> Pokemon Lists</Link>

               </li>
            </ul>
    </div>
  )
}

export default Navbar