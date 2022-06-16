import React from 'react';
import estilo from './Card.module.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className={estilo.contenedor}>
        <button className={estilo.boton} onClick={onClose}>X</button>
        
          <h3 className={estilo.titulo}>{name}</h3>
        
        <div className={estilo.minMax}>
        <div>
            <p className={estilo.min}>Min</p>
            <p>{`${min}°C`}</p>
        </div>
        <div>
            <p>Max</p>
            <p>{`${max}°C`}</p>
        </div>
      <div className={img}>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="No se encuentras la foto" width='100px' height='100px'/>
      </div>
      </div>
      </div>
    );
};
