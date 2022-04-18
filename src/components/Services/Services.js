import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
  return (
    <div className="footer-style">
      <h2>These are my Services:{services.length}</h2>
    </div>
  );
};

export default Services;
