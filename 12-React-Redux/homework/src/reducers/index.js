import 
{GET_MOVIES, 
 ADD_MOVIE_FAVORITE, 
 GET_MOVIE_DETAIL, 
 REMOVE_MOVIE_FAVORITE } 
 from '../actions';


const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {},
}

export default function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case GET_MOVIES:
            return {
                ...state,
                moviesLoaded: payload.Search,
            }
        case ADD_MOVIE_FAVORITE: 
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.concat(payload)
            }
        case GET_MOVIE_DETAIL: 
            return {
                ...state,
               movieDetail: payload,
            }   
            
        case REMOVE_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter(({id}) => id !== payload)
            }          
        default: return state
    }
}


