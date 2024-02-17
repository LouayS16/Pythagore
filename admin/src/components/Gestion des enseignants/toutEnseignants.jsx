// ListeEleve.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './toutEnseignants.css';


const ToutEnseignants = () => {
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


////////////////////////////////////////////////////////////////suppression
const handleDelete = async (cin) => { // Include cin as a parameter
    try {
      await axios.delete(`http://localhost:3003/deleteEnseignant/${cin}`);
      // Update the state after successful deletion
      setEnseignants(enseignants.filter(enseignant => enseignant.cin !== cin));
    } catch (error) {
      console.error(error);
    }
  };
  




  return (
    <div className='title'>
      <h2>Liste des enseignants</h2>
      <table>
        <thead>
          <tr>
            <th>cin</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Matière</th>
          </tr>
        </thead>
        <tbody>
          {enseignants.map(enseignant => (
            <tr key={enseignant.cin}>
              <td>{enseignant.cin}</td>
              <td>{enseignant.nom}</td>
              <td>{enseignant.prenom}</td>
              <td>{enseignant.specialite}</td>
              <td><a href=''><button>modifier</button></a></td>
              <td><button onClick={() => handleDelete(enseignant.cin)}>supprimer</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToutEnseignants;
