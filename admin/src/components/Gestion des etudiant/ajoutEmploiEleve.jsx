import React, { useState } from 'react';
import axios from 'axios';
import './ajoutEmploiEleve.css';

const AjoutEmploiEleve = () => {
    const [niveau, setNiveau] = useState('');
    const [classe, setClasse] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('emploi', file);
        formData.append('niveau', niveau);
        formData.append('classe', classe);

        try {
            const response = await axios.post('http://localhost:3003/uploadEleve', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('EmploiEleve ajouté avec succès:', response.data);
            // You can add further logic here, like showing a success message or redirecting to another page
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'emploiEleve:', error);
            // You can handle errors here, such as displaying an error message to the user
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Ajouter Emploi Eleve</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Niveau:</label>
                        <input type="text" value={niveau} onChange={(e) => setNiveau(e.target.value)} required />
                    </div>
                    <div>
                        <label>Classe:</label>
                        <input type="text" value={classe} onChange={(e) => setClasse(e.target.value)} required />
                    </div>
                    <div>
                        <label>Emploi File:</label>
                        <input type="file" onChange={handleFileChange} required />
                    </div>
                    <button type="submit">Ajouter Emploi</button>
                </form>
            </div>
        </div>
    );
};

export default AjoutEmploiEleve;
