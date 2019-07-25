import React, { Component } from 'react'
import "./TooCold.css";
// import * as request from 'superagent'


class Temperature extends Component {

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
                <h2>{this.props.temperature}°C</h2>
            </div>
        )
    }
}

export default Temperature
