import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home"
import FicheLogement from "./pages/ficheLogement/FicheLogement"
import APropos from "./pages/aPropos/APropos"
import Erreur from "./pages/erreur/erreur"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aPropos" element={<APropos />} />
        <Route path="/ficheLogement/:id" element={<FicheLogement />} />
        <Route path="/ficheLogement/*" element={<Erreur />} />
      </Routes>
    </div>
  );
}

export default App;
