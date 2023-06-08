import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import FicheLogement from "./pages/FicheLogement"
import APropos from "./pages/APropos"
import Erreur from "./pages/Erreur"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './styles/App.css'

function App() {
  return (
    <div id="App">
      <div id="appContainer">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aPropos" element={<APropos />} />
        <Route path="/ficheLogement/:id" element={<FicheLogement />} />
        <Route path="/*" element={<Erreur />} />
      </Routes>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
