import React, { Component } from 'react'
import LandingPage from './LandingPage'
import TooColdDefault from '../TooColdDefault';

export default class LandingPageContainer extends Component {
    state = {
        temperature: null,
        tooCold: false
    }

    componentDidMount() {
        const lat = 51.9225;
        const lng = 4.47917;
        const params = 'airTemperature';
        // const city = 'Amsterdam';
        // const countrycode = '31';
        // fetch(`api.openweathermap.org/data/2.5/weather?q=${city}${countrycode}&mode=json`, {
        // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon${lng}&appid=9ca3035404a32c3e8ffa93136522ae67`, {
        //     fetch(`https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=9ca3035404a32c3e8ffa93136522ae67`, {
        //         headers: {
        //             'Authorization': '9ca3035404a32c3e8ffa93136522ae67'
        //         }
        //     }).then(response => console.log(response))
        //     // => response.json()
        //     // ).then((jsonData) => {
        //         // console.log(jsonData)
        //     .catch(console.error)
        // }

        //  9ca3035404a32c3e8ffa93136522ae67

        this.state.temperature === null && fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}&params=${params}&end=2019-07-25&source=dwd`, {
            headers: {
                'Authorization': '7d61fa8c-aee1-11e9-afdd-0242ac130004-7d61fb90-aee1-11e9-afdd-0242ac130004'
            }
        }).then((response) => response.json()).then((jsonData) => {
            console.log(jsonData.hours[0].airTemperature[0].value)
            const temp = jsonData.hours[0].airTemperature[0].value
            const roundedTemp = Math.floor(temp)
            this.updateTemperature(roundedTemp)
            if (roundedTemp < 21) {
                this.setState({
                    tooCold: true
                })
            }
        }).catch(console.error);
    }


    updateTemperature(temp) {
        this.setState({
            temperature: temp
        })
    }


    render() {
        return (
            <div>
                <div>

                    {this.state.tooCold ?
                    <LandingPage temperature={this.state.temperature} /> :
                     <TooColdDefault temperature={this.state.temperature} />}
                </div>

            </div>
        )
    }
}
