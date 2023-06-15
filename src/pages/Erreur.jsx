import React from 'react'
import {Link} from "react-router-dom"
import '../styles/Erreur.css'

export default function erreur() {
  return (
    <main>
      <div id="error404">404</div>
      <h1 id="errorMessage">Oups! La page que vous demandez n'existe pas.</h1>
      <Link to="/" id="homepageRedirectionLink">Retourner sur la page d’accueil</Link>
    </main>
  )
}
