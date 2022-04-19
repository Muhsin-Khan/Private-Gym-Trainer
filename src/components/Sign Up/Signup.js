import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login');
  }

  const handleSignup = event => {
    event.preventDefault();
  }
  return (
    <div className="footer-style signup-form">
      <h3 style={{textAlign: 'center'}}>Sign Up</h3>
      <form onSubmit={handleSignup}>
          <input type="text" name="name" id="" placeholder="Your Name" />
          <input type="email" name="email" id="" placeholder="Email Address" />
          <input type="password" name="password" id="" placeholder="Password" />
          <input type="submit" value='Sign Up'/>
      </form>
      <p>Already have an account? <Link to='/login'  onClick={navigateLogin} className="text-danger text-decoration-none pe-auto">Please Login</Link></p>
    </div>
  );
};

export default Signup;
