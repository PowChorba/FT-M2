import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import estilo from './Nav.module.css';

function Nav({onSearch}) {
  return (
    <div className={estilo.contenedor}>
      <div className={estilo.titulo}>
        <h3 className={estilo.h3}>Weather - Henry</h3>
        <img src={Logo} alt="No se encontro" />
      </div>
      <SearchBar onSearch={onSearch}></SearchBar>
    </div>
  );
};

export default Nav;
