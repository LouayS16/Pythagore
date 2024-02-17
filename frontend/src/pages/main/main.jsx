import React from 'react';
import AfficherActualite from '../afficherActualite.jsx';
import Login from '../login/LoginSignup';
import './main.css'; // Import your CSS file for styling

const MainPage = () => {
  return (
    <div className="main">
      <div className="column smaller"></div>
      <div className="column larger"><AfficherActualite/></div>
      <div className="column"><Login/></div>
    </div>
  );
};

export default MainPage;
