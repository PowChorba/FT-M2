import React from 'react';
import { Link } from 'react-router-dom';


export default function Ciudad({ city }) {
    return (
        <div>
            <div className="contenedor">
                <h2>{city.name}</h2>
            </div>
            <div className="informacion">
                <p>Temperatura: {city.temp} ºC</p>
                <p>Clima: {city.weather}</p>
                <p>Viento: {city.wind} km/h</p>
                <p>Cantidad de nubes: {city.clouds}</p>
                <p>Latitud: {city.latitud}º</p>
                <p>Longitud: {city.longitud}º</p>
            </div>
            <Link exact to='/'>
            <button>Volver</button>
            </Link>
        </div>

    )

    
}