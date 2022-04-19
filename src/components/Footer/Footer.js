import React from 'react'
import './Footer.css'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className='footer'><h3 className="footer-heading"> Private Gym Trainer {year}</h3>
    <p className="copyright"> Copyright © {year} Private Gym Trainer</p>
    <p className="font-style">All rights reserved</p>     
    </div>
  )
}

export default Footer