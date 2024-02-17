import React, { useState } from 'react';
import axios from 'axios';
import './afficherEmploiEns.css';

const AfficherEmploiEns = () => {
    const [cin, setCin] = useState('');
    const [emploi, setEmploi] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setCin(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3003/emploi/${cin}`);
            setEmploi(response.data);
        } catch (error) {
            setError('Emploi not found');
            setEmploi(null);
        }
    };

    return (
        <div>
            <h2>Afficher Emploi Enseignants</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="cin">CIN:</label>
                <input
                    type="text"
                    id="cin"
                    value={cin}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Afficher Emploi</button>
            </form>
            {error && <p>{error}</p>}
            {emploi && (
                <div>
                <h3>Emploi:</h3>
                <table className="emploi-table">
                    <tbody>
                        <tr>
                            <td>Document:</td>
                            <td><a href={`http://localhost:3003/uploads/${emploi.emploi}`} target="_blank" rel="noopener noreferrer">{emploi.emploi}</a></td>
                        </tr>
                        <tr>
                            <td>Date:</td>
                            <td>{new Date(emploi.date).toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            )}
        </div>
    );
};

export default AfficherEmploiEns;
