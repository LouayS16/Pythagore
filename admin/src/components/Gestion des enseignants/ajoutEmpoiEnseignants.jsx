import React, { useState } from 'react';
import axios from 'axios';

const AjoutEmploiEnseignant = () => {
    const [cin, setCin] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('emploi', file);
        formData.append('cin', cin);

        try {
            const response = await axios.post('http://localhost:3003/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('EmploiEnseignant ajouté avec succès:', response.data);
            // You can add further logic here, like showing a success message or redirecting to another page
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'emploiEnseignant:', error);
            // You can handle errors here, such as displaying an error message to the user
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Ajouter Emploi Enseignant</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>CIN:</label>
                        <input type="text" value={cin} onChange={(e) => setCin(e.target.value)} required />
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

export default AjoutEmploiEnseignant;
