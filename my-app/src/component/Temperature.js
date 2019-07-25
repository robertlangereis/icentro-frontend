import React, { Component } from 'react'
import "./TooCold.css";
// import * as request from 'superagent'


class Temperature extends Component {
    state = { temperature: null };

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

        fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}&params=${params}&end=2019-07-25&source=dwd`, {
            headers: {
                'Authorization': 'd2614104-aed8-11e9-9c0e-0242ac130004-d26141fe-aed8-11e9-9c0e-0242ac130004'
            }
        }).then((response) => response.json()).then((jsonData) => {
            console.log(jsonData.hours[0].airTemperature[0].value)
            const temp = jsonData.hours[0].airTemperature[0].value
            const roundedTemp = Math.floor(temp)
            this.updateTemperature(roundedTemp)
        }).catch(console.error);
    }


    updateTemperature(temp) {
        this.setState({
            temperature: temp
        })
    }


    //     const res = await request.get('https://crossorigin.me/https://api.darksky.net/forecast/8be3e49ea3f914e81246d06fd4cbfa2d/52.379189,4.899431');
    //     res && console.log(res)
    //     // request
    //     //     .get('https://crossorigin.me/https://api.darksky.net/forecast/8be3e49ea3f914e81246d06fd4cbfa2d/52.379189,4.899431')
    //     //     .then(response => {
    //     //         // this.updateBreeds(breeds)
    //     //         Object.keys(response.body.message)
    //     //     }).then(response => console.log(response))
    //     //     .catch(console.error)
    // }

    render() {
        return (
            <div className='temperature'>
                {/* <h2>20°C</h2> */}
                <h2>{this.state.temperature}°C</h2>
            </div>
        )
    }
}

export default Temperature
