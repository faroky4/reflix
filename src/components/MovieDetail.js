import React, { Component } from 'react';

// import '../styles/home.css'

class MovieDetail extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }
    
    render() {
        let movie = this.props.movies[this.props.match.params.id]
        return (
            <div>
                <h1 id="movie-title">{movie.title} ({movie.year})</h1>
                <div id="movie-container">
                    <img src={movie.img} />
                    <p>{movie.descrShort}</p>
                </div>
            </div>
        );
    }
}

export default MovieDetail;