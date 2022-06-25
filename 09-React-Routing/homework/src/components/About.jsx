import React from 'react';
import { Link } from 'react-router-dom';

export default function About(){
    return (
        <div>
            <h1>Mi nombre es Agop</h1>
            <Link to='/'>
            <button>Volver</button>
            </Link>
        </div>
    )
}

