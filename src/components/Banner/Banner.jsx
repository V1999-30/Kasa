import React from "react"; 
import "./Banner.css";

function Banner ({image, texte}) {
  return(
    <div id="banner">
      <img src={image} alt="Bannière"/>
      <p>{texte}</p>
    </div>
  )
}

export default Banner;