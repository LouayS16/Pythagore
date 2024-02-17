
// Hero.jsx

import React from 'react';
import './hero.css';
import lycee from '../Assets/Lycee.jpg';

const Hero = () => {
  return (
    <div className="hero">
        <img src={lycee} alt="lycee" />
        <h1 className='content'>Welcome to Pythagore</h1>
    </div>
  );
};

export default Hero;
