// Creee enseignant

import React, { useState } from 'react';
import axios from 'axios';
import './ajouterEnseignant.css';

const ajouterEnseignant = () => {
  // State variables for form data
  const [cin, setCin] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [specialite, setSpecialite] = useState('');
  

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform actions with the form data, e.g., send it to the backend
    console.log('Form submitted:', { cin, nom, prenom, specialite });

    // You can add logic here to send data to the backend API using Axios or Fetch
    const serverUrl = 'http://localhost:3003';
    axios.post(`${serverUrl}/ajoutEnseignant`, { cin, nom, prenom, specialite })
               .then(response => console.log(response))
               .catch(error => console.error(error));

    // Clear form fields after submission
    setCin('');
    setNom('');
    setPrenom('');
    setSpecialite('');
    
  };

  return (
    <div className='container'>
    <div className="form-container">
      <h2 className='head'>Ajouter un enseignant</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Cin:
          <input type="text" value={cin} onChange={(e) => setCin(e.target.value)} />
        </label>
        <br />
        <label>
          Nom:
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>
        <br />
        <label>
          Prénom:
          <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
        </label>
        <br />
        <label>
          Specialite:
          <input type="text" value={specialite} onChange={(e) => setSpecialite(e.target.value)} />
        </label>
        <br />
         
        <br />
        <button type="submit">Créer</button>
      </form>
    </div>
    </div>
  );
};

export default ajouterEnseignant;
