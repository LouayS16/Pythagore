
import './App.css';
//import ajouterEleve from './Components/ajouterEleve';

import Hero from './Components/hero/hero';
import Navbar from './Components/Navbar/Navbar.jsx';
import Top from './Components/top/top';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ListeEleve from './pages/listeEleve.jsx';
import ListeEnseignants from './pages/listeEnseignants';
import MainPage from './pages/main/main.jsx';
import Footer from './Components/footer/footer.jsx';
import EmploiEleve from './pages/emploiEleve.jsx';
import AfficherEmploiEns from './pages/afficherEmploiEns.jsx';


function App() {
  return (
    
    <div>
      <Top/>
      <Navbar/>
      <Hero/>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/liste-des-etudiants' element={<ListeEleve/>} />
      <Route path='/liste-des-enseignants' element={<ListeEnseignants/>} />
      <Route path='/emploiEleve' element={<EmploiEleve/>} />
      <Route path='/emploiEns' element={<AfficherEmploiEns/>} />
      </Routes>
      </BrowserRouter>
      <div className='Footer'>
      <Footer/>
        </div>
    </div>
    

  );
}

export default App;
