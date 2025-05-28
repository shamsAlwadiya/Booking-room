import React from 'react'
import './Navbar.css'
import Home from '../../Pages/Home'
import { Link } from 'react-router-dom'
import About from '../../Pages/About'
import Rooms from '../../Pages/Rooms'
import MyBooking from '../../Pages/MyBooking'
import Login from '../../Pages/Login'
import Register from '../../Pages/Register'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <h1><span>B</span>ookSpace</h1>
      </div>
      <div className="navbar-list">
        <ul>
          <Link to='/' className='link'><li>Home</li></Link>  
          <Link to='/about' className='link'><li>About</li></Link>  
           <Link to='/rooms' className='link'><li>Rooms</li></Link> 
           <Link to='/mybooking' className='link'><li>MyBooking</li></Link> 
        </ul>

      </div>
      <div className="navbar-loginsignup">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/register'><button>Signup</button></Link>
      </div>
    </div>
  )
}

export default Navbar
