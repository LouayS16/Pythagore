

import React from 'react';
import './top.css';
import tn from '../Assets/tn.jpg';
import logo from '../Assets/logo.jpg';

const Top = () => {
  return (
    <div className="h">
        <div>
            <img className='logo' src={logo} alt="logo" /> 
            <p> Lycée pilote privé Pythagore Feriana</p>
        </div>
        <div>
        <img src={tn} alt="tn" /> 
            <p1> Republique Tunisienne</p1>
            <p2>Ministère de l'éducation</p2>
        </div>
      
    </div>
    
    
  );
};

export default  Top;
