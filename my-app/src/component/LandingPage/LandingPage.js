import React, { Component } from 'react'
import "./LandingPage.css"
import SearchingContainer from '../Searching/SearchingContainer';
import { Link } from "react-router-dom";


export class LandingPage extends Component {

    render() {

        return (

         <div className="landing-container">
                    <h1>ICEntro</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                        <h3>{this.props.temperature}°C! TIJD VOOR DIE IJSJES</h3>
                        <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                        <button onClick={this.onClickRoute}>

                            <Link to="/search">Get ICE!</Link>
                        </button>
            </div>
        )
    }
}

export default LandingPage
