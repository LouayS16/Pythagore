import React from 'react'
import Navbar from './components/navbar/navbar'
import {Routes,Route} from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar.jsx'
import AllStudents from './components/Gestion des etudiant/allStudents.jsx';
import AjoutEleve from './components/Gestion des etudiant/ajoutEleve.jsx';
import ModifierEleve from './components/Gestion des etudiant/modifierEleve.jsx';
import AjouterEnseignants from './components/Gestion des enseignants/ajouterEnseignants.jsx';
import ToutEnseignants from './components/Gestion des enseignants/toutEnseignants.jsx';
import AjoutEmploiEnseignant from './components/Gestion des enseignants/ajoutEmpoiEnseignants.jsx';
import AjoutEmploiEleve from './components/Gestion des etudiant/ajoutEmploiEleve.jsx';
import AddNews from './components/Gestion Generale/ajouterActualite';

const App =()=>{
    return(
      <div className="app-container">
      <Navbar/>
        <div className='side'>
      <Sidebar/>
      </div>
      
      <Routes className="routes-container">
      <Route path='/ajoutEleve' element={<AjoutEleve/>} />
      <Route path='/AllStudents' element={<AllStudents/>} />
      <Route path='/modifier' element={<ModifierEleve/>} />
      <Route path='/ajoutEmploiEleve' element={<AjoutEmploiEleve/>} />
      <Route path='/ajouterEnseignant' element={<AjouterEnseignants/>} />
      <Route path='/toutEnseignants' element={<ToutEnseignants/>} />
      <Route path='/ajoutEmploiEnseignant' element={<AjoutEmploiEnseignant/>} />
      <Route path='/ajoutActualite' element={<AddNews/>} />

      </Routes>
      
</div>

    )
}

export default App