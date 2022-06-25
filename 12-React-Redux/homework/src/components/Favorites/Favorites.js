import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeMovieFavorite} from '../../actions'

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {this.props.favs.map(e => 
          <li key={e.id}>
            <span>{e.title}</span>
            <button onClick={() => this.props.removeMovieFavorite(e.id)}>X</button>
          </li>)}
        </ul>
      </div>
    );
  }
}

function mapStateProps(state) {
  return {
    favs: state.moviesFavourites,
  }
}

function mapDispatchProps(dispatch){
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
  }
}


export default connect(mapStateProps,mapDispatchProps)(ConnectedList);
