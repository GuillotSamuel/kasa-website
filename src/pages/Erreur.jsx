import React from 'react'
import {Link} from "react-router-dom"
import '../styles/Erreur.css'

export default function erreur() {
  return (
    <main>
      <h1 id="error404">404</h1>
      <h2 id="errorMessage">Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" id="homepageRedirectionLink">Retourner sur la page d’accueil</Link>
    </main>
  )
}
