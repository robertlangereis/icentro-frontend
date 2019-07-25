import React, { Component } from 'react'
import "./TooCold.css";
import Temperature from "./Temperature.js";
import noIcecreamGif from"./no-icecream.gif";
import tooColdGif from"./too-cold.gif";

class TooColdDefault extends Component {

    
    render() {
        return (
            <div className="body">
                <div className='title'>
                    <h1>ICEntro <span aria-label="iceCream-Emoji" role="img">🍦</span></h1>
                    <h2>No man, it's below <Temperature/> No time for IceCream!</h2>
                    <img className="gif" src={tooColdGif} alt="...it's too cold..." />
                    <img className="gif" src={noIcecreamGif} alt="no ice cream today..." />
                </div>
            </div>
        )
    }
}

export default TooColdDefault