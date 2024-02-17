import React from 'react';
import './footer.css';
import facebook from '../Assets/facebook.png';
import instagram from '../Assets/instagram.png';
import x from '../Assets/x.png';
import youtube from '../Assets/youtube.png';


const Footer = () => {
  return (
    <div>
        <footer class="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item"><a className="social-icon__link" href="https://www.facebook.com/profile.php?id=61550097281696" target="_blank">
          <img src={facebook} alt="facebook" />
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="#">
          <img src={instagram} alt="instagram" />
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="#">
          <img src={x} alt="x" />
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="#">
          <img src={youtube} alt="youtube" />
        </a></li>
      </ul>
      <ul className="menu">
        <li className="menu__item">Notre Email : </li>
        <li className="menu__item">Telephone :</li>
       
      </ul>
      <p>&copy;2024 | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
