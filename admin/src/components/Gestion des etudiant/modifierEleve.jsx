import React, { useState } from 'react';
import axios from 'axios';

const ModifierEleve = () => {
  const [newData, setNewData] = useState({
    id: '', // Renamed id to match the field name
    nom: '',
    prenom: '',
    niveau: '', // Assuming niveau is a field for the level of education
    classe: '',
    age: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.put(`/updateEleve/${newData.id}`, newData); // Endpoint adjusted to match server-side route
      setMessage('Enseignant mis à jour avec succès');
      console.log(response.data);
    } catch (error) {
      setMessage('Erreur lors de la mise à jour de l\'enseignant');
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleUpdate}>
        <label>ID:</label> {/* Field label updated */}
        <input type="text" name="id" value={newData.id} onChange={handleChange} />

        <label>Nom:</label>
        <input type="text" name="nom" value={newData.nom} onChange={handleChange} />

        <label>Prénom:</label>
        <input type="text" name="prenom" value={newData.prenom} onChange={handleChange} />

        <label>Niveau:</label> {/* Assuming niveau is a field for the level of education */}
        <input type="text" name="niveau" value={newData.niveau} onChange={handleChange} />

        <label>Classe:</label>
        <input type="text" name="classe" value={newData.classe} onChange={handleChange} />

        <label>Âge:</label>
        <input type="text" name="age" value={newData.age} onChange={handleChange} />

        <button type="submit">
          Enregistrer
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default ModifierEleve;
