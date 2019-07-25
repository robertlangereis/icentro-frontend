import React, { Component } from 'react'
import "./LandingPage.css"
import SearchingContainer from '../Searching/SearchingContainer';
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";


export class LandingPage extends Component {

    render() {

        return (

         <div className="landing-container">
                    <h1>ICEntro</h1>
                        <h3>{this.props.temperature}</h3>
                        <button onClick={this.onClickRoute}>
                            <Link to="/search">Get ICE!</Link>
                        </button>
            </div>
        )
    }
}

export default LandingPage
