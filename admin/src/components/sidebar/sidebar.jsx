import React from 'react'
import './sidebar.css'

const Sidebar =()=> {
    return (
        <div className='sidebar'>
        
        <ul className='bar_menu'>
          <li class="has-children">
                          <a href="#">Gestion des élèves</a>
                          <ul class="dropdown">
                            <li><a href='/ajoutEleve'>Ajout d'un élève</a></li>
                            <li><a href='/AllStudents'>Liste des élèves</a></li>
                            <li><a href="/ajoutEmploiEleve">Ajouter emplois du temps</a></li>
                          </ul>
                        </li>
          <li class="has-children">
                          <a href="#">Gestion des Enseignants</a>
                          <ul class="dropdown">
                          <li><a href='/ajouterEnseignant'>Ajouter Enseignant</a></li>
                          <li><a href='/toutEnseignants'>Liste des Enseignants</a></li>
                            <li><a href="/ajoutEmploiEnseignant">Ajouter emplois du temps</a></li>
                            <li><a href="#">Modifier emplois du temps</a></li>
                          </ul>
                        </li>
                        <li class="has-children">
                          <a href="#">Gestion Generale</a>
                          <ul class="dropdown">
                          <li><a href='/ajoutActualite'>Ajouter une actualité</a></li>
                        </ul>
                        </li>
  
         
        </ul>
      </div>
    )
}

export default Sidebar