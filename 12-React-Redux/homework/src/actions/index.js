export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE'
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL'
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE'
export const GET_MOVIES = 'GET_MOVIES'
const API_KEY = '610aab95'

export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIES, payload: json });
        });
    };
  }

export function addMovieFavorite(movie) {
    return { 
        type: ADD_MOVIE_FAVORITE,
        payload: movie
     };
}

export function getMovieDetail(id) {
  return function(dispatch) {
    return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(response => response.json())
      .then(detail => {
        dispatch({ type: GET_MOVIE_DETAIL, payload: detail });
      });
  };
}

export function removeMovieFavorite(id) {
    return {
        type: REMOVE_MOVIE_FAVORITE,
        payload: id
    }
}
