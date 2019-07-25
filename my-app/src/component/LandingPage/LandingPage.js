import React, { Component } from 'react'
import "./LandingPage.css"
import SearchingContainer from '../Searching/SearchingContainer';
import { Switch, Route } from "react-router-dom";

export class LandingPage extends Component {




    render() {

        return (
            <div>
                <div className="title">
                    <h1>ICEntro</h1>
                </div>
                <div className="content">
                    <div className="temperature">
                        <h3>{this.props.temperature}</h3>
                    </div>
                    <div className="button">
                        <button onClick={()=>SearchingContainer}>
                            Get ICE!
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage
