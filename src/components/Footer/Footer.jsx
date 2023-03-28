import React from 'react';
import "./Footer.css";

function Footer({image}) {
    return(
        <footer>
            <img src={image} alt="logo footer"/>
            <p>&copy; 2022 Kasa. Tous droits réservés</p>
        </footer>
    )
}

export default Footer;