
import './styles/App.css';

import { Routes, Route} from "react-router-dom"

import {Accueil} from './pages/Accueil'
import {FicheLogement} from './pages/Fiche-logement'




function App () {
  return (
    <Routes>
      <Route path="/" element= {<Accueil />} />
      <Route path="/fiche-logement" element= {<FicheLogement />} />
    </Routes>
  );
}


export default App;

