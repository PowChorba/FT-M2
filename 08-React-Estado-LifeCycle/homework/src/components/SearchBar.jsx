import React, { useState } from "react";
import estilo from './SearchBar.module.css'


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        className={estilo.input}
        onChange ={e => setCity(e.target.value)}
        value = {city}
      />
      <button  className={estilo.boton}>Agregar</button>
    </form>
  );
}
