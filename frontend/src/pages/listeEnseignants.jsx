// ListeEleve.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './listeEnseignants.css';


const ListeEnseignants = () => {
  // State variable to store the list of students
  const [enseignants, setEnseignants] = useState([]);

  // Fetch the list of students from the backend when the component mounts
  useEffect(() => {
    const serverUrl = 'http://localhost:3003';

    axios.get(`${serverUrl}/listeEnseignants`)
      .then(response => {
        // Set the list of students in the state
        setEnseignants(response.data);
      })
      .catch(error => console.error(error));
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div className='title'>
      <h2>Nos enseignants :</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Matière</th>
          </tr>
        </thead>
        <tbody>
          {enseignants.map(enseignant => (
            <tr key={enseignant.cin}>
              <td>{enseignant.nom}</td>
              <td>{enseignant.prenom}</td>
              <td>{enseignant.specialite}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListeEnseignants;
