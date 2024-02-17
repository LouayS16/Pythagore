// navbar.jsx

import React from 'react';
import './Navbar.css';
import home from '../Assets/home.png'
import { useState } from 'react';
const Navbar = () => {
  const [menu,setMenu]=useState("pythagore");
  return (
    
      <div className='Navbar'>
        
      <ul className='nav_menu'>
        <li><img className='home' src={home} alt="home" href='/'/></li>
        <li class="has-children">
                        <a href="#">Lycée</a>
                        <ul class="dropdown">
                          <li><a href="#">Présentation</a></li>
                          <li><a href="#">Règlement interne</a></li>
                          <li><a href="#">staff administratif</a></li>
                          <li><a href="#">Pythagore en chiffres</a></li>
                          <li><a href="#">Gallerie</a></li>
                        </ul>
                      </li>
        <li class="has-children">
                        <a href="#">Etudiants</a>
                        <ul class="dropdown">
                          <li ><a href='/liste-des-etudiants'>Listes des groupes</a></li>
                          <li><a href='/emploiEleve'>emplois du temps</a></li>
                          <li><a href="#">calendrier des examens</a></li>
                        </ul>
                      </li>

        <li class="has-children">
                        <a href="#">Enseignants</a>
                        <ul class="dropdown">
                          <li><a href='/emploiEns'>Emploi du temps des Enseignants</a></li>
                          <li><a href='/liste-des-enseignants'>Nos Enseignants</a></li>
                        </ul>
                      </li>

        <li class="has-children">
                        <a href="#">Niveau</a>
                        <ul class="dropdown">
                          <li><a href="#">7éme année</a></li>
                          <li><a href="#">8éme année</a></li>
                          <li><a href="#">9éme année</a></li>
                        </ul>
                      </li>
      </ul>
    </div>
  );
}

export default Navbar;


