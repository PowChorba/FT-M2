import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  let buscar = () => {
    let inputValue = document.querySelector("#input")
    props.onSearch(inputValue.value)
  }
  return (
    <div>
      <input type="text" placeholder='Ciudad...' id='input'/>
      <button onClick={buscar}>Agregar</button>
    </div>
  )
};