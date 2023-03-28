import React from "react";
import Menu from "../../components/Menu/Menu";
import menuLogo from "../../assets/img/logo.jpg";
import "./Error.css";
import { NavLink } from "react-router-dom";

function Error() {
    return(
        <div>
            <div className="menu">
                <Menu image={menuLogo}/>
            </div>
            <div className="error">
                <h1 className="error-title">404</h1>
                <span className="error-text">Oups! La page que vous demandez n'existe pas.</span>
                <NavLink to="/" className="backlink ">Retourner sur la page d’accueil</NavLink>
            </div>
        </div>
    );
}

export default Error;