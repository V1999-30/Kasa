import React from 'react';
import "./Rent.css"

function Rent({id, image, titre}) {
  return (
    <figure id={id}>
      <img src={image} alt="appartement"/>
      <figcaption>
        <h4 className="logement">{titre}</h4>
      </figcaption>
    </figure>
  )
}

export default Rent;