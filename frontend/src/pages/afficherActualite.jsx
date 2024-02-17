import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AfficherActualite() {
  const [actualites, setActualites] = useState([]);

  useEffect(() => {
    const fetchActualites = async () => {
      try {
        const response = await axios.get('http://localhost:3003/actualites');
        setActualites(response.data);
      } catch (error) {
        console.error('Error fetching actualités:', error);
      }
    };

    fetchActualites();
  }, []);

  return (
    <div className="actualites-container">
      <h1>Liste des actualités</h1>
      <table className="actualites-table">
        <thead>
          <tr>
          <th>Date</th>
            <th>Titre</th>
            <th>Description</th>
            <th>Fichier</th>
          </tr>
        </thead>
        <tbody>
          {actualites.map((actualite) => (
            <tr key={actualite._id}>
              <td>{new Date(actualite.date).toLocaleDateString()}</td>
              <td>{actualite.titre}</td>
              <td>{actualite.description}</td>
              <td><a href={`http://localhost:3003/actualite/${actualite.pdf}`} target="_blank" rel="noopener noreferrer">{actualite.pdf}</a></td>
              {/* You can add more details about actualité here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 

  );
}

export default AfficherActualite;
