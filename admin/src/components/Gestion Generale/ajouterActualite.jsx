import React, { useState } from 'react';
import axios from 'axios';
import './ajouterActualite.css';

function AddNews() {
    const [pdf, setPdf] = useState(null);
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');

    const handleFileChange = (event) => {
        setPdf(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('pdf', pdf);
        formData.append('titre', titre);
        formData.append('description', description);

        try {
            const response = await axios.post('http://localhost:3003/uploadActualite', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Actualité ajoutée avec succès:', response.data);
            // You can add further logic here, like showing a success message or redirecting to another page
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'actualité:', error);
            // You can handle errors here, such as displaying an error message to the user
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2 className="form-title">Ajouter une actualité</h2>
                <form className="add-news-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="pdf" className="form-label">Actualité PDF:</label>
                        <input type="file" id="pdf" className="form-input" accept=".pdf" onChange={handleFileChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="titre" className="form-label">Titre:</label>
                        <input type="text" id="titre" className="form-input" value={titre} onChange={(e) => setTitre(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="form-label">Description:</label>
                        <textarea id="description" className="form-textarea" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="form-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddNews;
