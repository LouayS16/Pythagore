// ListeEleve.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './listeEleve.css';

const ListeEleve = () => {
  // State variable to store the list of students
  const [eleves, setEleves] = useState([]);

  // Fetch the list of students from the backend when the component mounts
  useEffect(() => {
    const serverUrl = 'http://localhost:3003';

    axios.get(`${serverUrl}/all`)
      .then(response => {
        // Set the list of students in the state
        setEleves(response.data);
      })
      .catch(error => console.error(error));
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div>
      <h2>Liste des élèves :</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Niveau</th>
            <th>Classe</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {eleves.map(eleve => (
            <tr key={eleve.id}>
              <td>{eleve.nom}</td>
              <td>{eleve.prenom}</td>
              <td>{eleve.niveau}</td>
              <td>{eleve.classe}</td>
              <td>{eleve.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListeEleve;
