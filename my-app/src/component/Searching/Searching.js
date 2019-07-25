import React, { Component } from 'react'
import "./Searching.css"
import loading_gif from './loading.gif'

export class Searching extends Component {
    render() {
        return (
            <div className="searchingContainer">
                <img src={loading_gif} />
                <h1>We zijn voor je aan het zoeken..</h1>
                <p>Smelt je al?</p>
            </div>
        )
    }
}

export default Searching