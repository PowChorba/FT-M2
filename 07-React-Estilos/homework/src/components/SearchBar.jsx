import React from 'react';
import estilo from './SearchBar.module.css'



export default function SearchBar(props) {
  // acá va tu código
  const buscar = () => {
    const inputSearch = document.querySelector('#inputSearch')
    props.onSearch(inputSearch.value)
  }
  
  return (
        <div>
          <input type="text" placeholder='Introduzca la ciudad' id='inputSearch' className={estilo.input}/>
          <button onClick={buscar} className={estilo.boton}>Agregar</button>
          
        </div>)
  
};