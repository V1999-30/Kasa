import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

function Menu ({image}) {
    return(
        <header>
          <NavLink to="/"><img src={image} alt="Logo de Kasa" /></NavLink>
        <nav>
          <NavLink to="/" className="lien-site lien-menu">Accueil</NavLink>
          <NavLink to="/About" className="lien-site lien-menu">À propos</NavLink>
        </nav>
        </header>
    )
}

export default Menu;