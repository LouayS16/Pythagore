// CreerEleve.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './ajoutEleve.css';

const CreerEleve = () => {
  // State variables for form data
  const [id, setId] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [niveau, setNiveau] = useState('');
  const [classe, setClasse] = useState('');
  const [age, setAge] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform actions with the form data, e.g., send it to the backend
    console.log('Form submitted:', { id, nom, prenom, niveau, classe, age });

    // You can add logic here to send data to the backend API using Axios or Fetch
    const serverUrl = 'http://localhost:3003';
    axios.post(`${serverUrl}/ajoutEleve`, { id, nom, prenom, niveau, classe, age })
               .then(response => console.log(response))
               .catch(error => console.error(error));

    // Clear form fields after submission
    setId('');
    setNom('');
    setPrenom('');
    setNiveau('');
    setClasse('');
    setAge('');
  };

  return (
    <div className='container'>
      <div className="form-container">
      <h2 className='head'>Ajouter un élève</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
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
          Niveau:
          <input type="text" value={niveau} onChange={(e) => setNiveau(e.target.value)} />
        </label>
        <br />
        <label>
          Classe:
          <input type="text" value={classe} onChange={(e) => setClasse(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <button type="submit">Créer</button>
      </form>
    </div>
    </div>
  );
};

export default CreerEleve;
