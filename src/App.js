
import './styles/App.css';

import { Routes, Route, Navigate} from "react-router-dom"

import {Accueil} from './pages/Accueil'
import {FicheLogement} from './pages/Fiche-logement'
import {Erreur404} from './pages/404'
import {Apropos} from './pages/Apropos'


function App () {
  return (
    <Routes>
      
      <Route path="/" element= {<Accueil />} />
      <Route path="/fiche-logement/:id" element= {<FicheLogement />} />
      <Route path="/Apropos" element= {<Apropos />} />
      <Route path='/404' element={<Erreur404 />} />
      <Route path="*" element= {<Erreur404 />} />    
      

    </Routes>
  );
}


export default App;

