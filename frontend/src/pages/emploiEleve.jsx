import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmploiEleve= () => {
    const [niveau, setNiveau] = useState('');
    const [classe, setClasse] = useState('');
    const [emploiEleves, setEmploiEleves] = useState([]);

    

    const fetchEmploiEleves = async () => {
        try {
            const response = await axios.get('http://localhost:3003/emploiEleves', {
                params: {
                    niveau,
                    classe
                }
            });
            setEmploiEleves(response.data);
        } catch (error) {
            console.error('Error fetching emploiEleves:', error);
        }
    };

    useEffect(() => {
        fetchEmploiEleves();
    }, [niveau, classe]);

    return (
        <div className="container">
            <h2>Liste des Emploi Eleves</h2>
            <div className="filter-form">
                <label>Niveau:</label>
                <select value={niveau} onChange={(e) => setNiveau(e.target.value)}>
                    <option value="7ème année">7ème année</option>
                    <option value="8ème année">8ème année</option>
                    <option value="9ème année">9ème année</option>
                    
                </select>
                <label>Classe:</label>
                <select value={classe} onChange={(e) => setClasse(e.target.value)}>
                    <option value="b1">b1</option>
                    <option value="b2">b2</option>
                    <option value="b3">b3</option>
                </select>
                <button onClick={fetchEmploiEleves}>Filtrer</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Niveau</th>
                        <th>Classe</th>
                        <th>Emploi</th>
                    </tr>
                </thead>
                <tbody>
                    {emploiEleves.map((emploiEleve) => (
                        <tr key={emploiEleve._id}>
                            <td>{emploiEleve.niveau}</td>
                            <td>{emploiEleve.classe}</td>
                            <td><a href={`http://localhost:3003/uploadsEleve/${emploiEleve.emploi}`} target="_blank" rel="noopener noreferrer">{emploiEleve.emploi}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmploiEleve;
