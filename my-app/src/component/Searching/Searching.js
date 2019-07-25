import React, { Component } from 'react'
import "./Searching.css"
import loading_gif from './loading.gif'
import { Link, Redirect } from "react-router-dom";

export class Searching extends Component {
    
    state = {
        redirect: false
      }
    
      componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 2000)
        // return <Redirect to="/found-icecream"/>
      }
    
      componentWillUnmount() {
        clearTimeout(this.id)
      }
    
    render() {

        return  this.state.redirect ? <Redirect to="/found-icecream"/>: (
            <div className="searchingContainer">
                <img src={loading_gif} />
                <h1>We zijn voor je aan het zoeken..</h1>
                <p>Smelt je al?</p>
            </div>
        )
    }
}

export default Searching