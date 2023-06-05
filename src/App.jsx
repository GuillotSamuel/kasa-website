import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home"
import FicheLogement from "./pages/ficheLogement/FicheLogement"
import APropos from "./pages/aPropos/APropos"
import Erreur from "./pages/erreur/Erreur"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aPropos" element={<APropos />} />
        <Route path="/ficheLogement/:id" element={<FicheLogement />} />
        <Route path="/ficheLogement/*" element={<Erreur />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
