// ListeEleve.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './allStudents.css';

const AllStudents = () => {
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


////////////////////////////////////////////////////////////////suppression
const handleDelete = async (id) => { // Include id as a parameter
  try {
    await axios.delete(`http://localhost:3003/deleteEleve/${id}`);
    // Update the state after successful deletion
    setEleves(eleves.filter(eleve => eleve.id !== id));
  } catch (error) {
    console.error(error);
  }
};





  return (
    <div className='title'>
      <h2>Liste des élèves</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
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
              <td>{eleve.id}</td>
              <td>{eleve.nom}</td>
              <td>{eleve.prenom}</td>
              <td>{eleve.niveau}</td>
              <td>{eleve.classe}</td>
              <td>{eleve.age}</td>
              <td><a href='/modifier'><button>modifier</button></a></td>
              <td><button onClick={() => handleDelete(eleve.id)}>supprimer</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudents;
