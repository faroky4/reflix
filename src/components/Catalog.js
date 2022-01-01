import React, { Component } from 'react';

//import '../styles/home.css'

class Catalog extends Component {
    constructor(){
        super()
        this.state = {
            isClicked: false
        }
    }
    clickedMovie = () => {
        this.setState({ isClicked: true });
    };

    unentMovie() {
        this.setState({ isRented: false });
    }

    rentMovie() {
        this.setState({ isRented: true });
    }
    
    render() {
        return (
            <div className='catalog'>
                
                <div className='rented'>
                    <h2> Rented </h2>
                    {(this.props.movies).map(m => 
                        m.isRented ? (
                        <button onClick={this.clickedMovie}>
                            <h3>{m.title}</h3>
                            <button className='unrent-button' isClicked={this.unentMovie}> - </button>
                            <img src={m.img} id='movieIMG'/>
                        </button>) : (<span></span>)  
                    )}
                </div>
                <div className='un-rented'>
                    <h2> Catalog </h2>
                    {(this.props.movies).map(m => 
                        !m.isRented ? (
                        <button className='movie' onClick={this.clickedMovie}>
                            <h3>{m.title}</h3>
                            <button className='rent-button' isClicked={this.rentMovie}> + </button>
                            <img src={m.img} id='movieIMG'/>
                        </button>) : (<span></span>)  
                    )}
                    
                </div>
            </div>
        );
    }
}

export default Catalog;