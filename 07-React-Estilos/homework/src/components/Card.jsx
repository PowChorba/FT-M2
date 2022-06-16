import React from 'react';
import estilo from './Card.module.css'

export default function Card(props) {
  // acá va tu código
  return (
        <div className={estilo.contenedor}>
            <button className={estilo.boton} onClick={props.onClose}>X</button>  
          <div>
            <h3 className={estilo.titulo}>{props.name}</h3>
          </div>
          <div className={estilo.minMax}>
            <div>
              <p>Min</p>
              <p>{props.min}</p>
            </div>
            <div>
              <p>Max</p>
              <p>{props.max}</p>
            </div>
            <div className={estilo.img}>
            <img  src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="No esta la imagen perro" />
            </div>
          </div>





        </div>)
};