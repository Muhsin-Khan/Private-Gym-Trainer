import React from 'react'
import './Service.css'

const Service = ({service}) => {
    const {name, img, description, price} = service;
  return (
    <div className=''>
        <div className='service'>
        <img src={img} alt="" />
        <h3>Service Name: {name}</h3>
        <p>Description: {description}</p>
        <h5>Price: ${price}</h5>
        <button>Book: {name}</button>
    </div>
    </div>
  )
}

export default Service