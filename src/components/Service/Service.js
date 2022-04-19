import React from 'react'
import { useNavigate } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import './Service.css'

const Service = ({service}) => {
    const {name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateLogin = () => {
      navigate('/login');
    }
  return (
    <div className=''>
        <div className='service'>
        <img className='w-100' src={img} alt="" />
        <div className="service-info">
        <h3>Service Name: {name}</h3>
        <p>Description: {description}</p>
        <h5>Price: ${price}</h5>
        </div>
        <button onClick={navigateLogin} className='btn btn-primary fw-bold'>Checkout</button>
    </div>
    </div>
    // <Link to='/login'  onClick={navigateLogin} className="text-danger text-decoration-none pe-auto">Please Login</Link>
  )
}

export default Service