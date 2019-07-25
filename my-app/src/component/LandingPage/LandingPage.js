import React, { Component } from 'react'
import "./LandingPage.css"

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="title">
                    <h1>ICEntro</h1>
                </div>
                <div className="content">
                    <div className="temperature">
                        <h3>37 C</h3>
                    </div>
                    <div className="button">
                        <button>
                            Get ICE!
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage
