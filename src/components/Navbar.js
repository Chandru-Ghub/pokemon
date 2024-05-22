import React, { useState } from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../images/egg.png'
import logo1 from '../images/logo.png'
const Navbar = () => {
  const [close,setClose] = useState(false)
  return (
    <div className='nav'>
        <div className='logo'>
                <p>&lt;&lt;&lt;</p>
                <img src={logo} alt="" />
                <p>&gt;&gt;&gt;</p>
        </div>
        <div className='midlogo'>
            <img src={logo1} alt="" />
        </div>
            <ul className={close?'navbar':'navbarhide'}>

               <li>
               <Link onClick={()=>setClose(!close)} to={'/'} style={{color:'inherit',textDecoration:'none'}}> Home</Link>

               </li>
               <li>
               <Link onClick={()=>setClose(!close)} style={{textDecoration:'none',color:'inherit'}} to={'/liked'}> Liked</Link>

               </li>
               <li>
               <Link onClick={()=>setClose(!close)} style={{textDecoration:'none',color:'inherit'}} to={'/list'}> Pokemon Lists</Link>

               </li>
              
            </ul>
            
               <span onClick={()=>setClose(!close)} class="material-symbols-outlined bur">
                menu
                </span>
              
    </div>
  )
}

export default Navbar