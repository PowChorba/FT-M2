import StateBlock from 'markdown-it/lib/rules_block/state_block';
import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId)
    }


    render() {
        return (
            <div className="movie-detail">
                <h1>Details of the Film</h1>
                <h3>{this.props.movies.Title}</h3>
                <img src={this.props.movies.Poster}></img> 
                <p>{this.props.movies.Year}</p>
                <p>{this.props.movies.Director}</p>
                <p>{this.props.movies.Actors}</p>
                <p>{this.props.movies.Runtime}</p>
            </div>
        );
    }
}
function mapStateProps(state){
    return {
        movies: state.movieDetail
    }
}

function mapDispatchProps(dispatch){
    return {
        getMovieDetail: movieID => dispatch(getMovieDetail(movieID))
    }
}


export default connect(mapStateProps,mapDispatchProps)(Movie);