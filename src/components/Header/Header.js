import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <nav>
        <Link to='/'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/blogs'>Blogs</Link>
        <Link to='/about'>Abouts</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
        </nav>
    </div>
  )
}

export default Header