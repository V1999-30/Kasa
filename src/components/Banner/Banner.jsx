import React from "react"; 
import "./Banner.css";

function Banner ({image, texte, hauteur}) {
  return(
    <div id="banner" style={{height: hauteur}}>
      <img src={image} alt="Bannière"/>
      <p>{texte}</p>
    </div>
  )
}

export default Banner;