import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'


class Kaart extends Component {
    render() {
        return (
            <Map
                style={{ width: '50%', height: '50%' }}
                initialCenter={{
                    lat: 52.379189,
                    lng: 4.899431
                }}
                google={this.props.google} zoom={14}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAu2x3CWxFl8iNP1dqfcNYdBRcI8ytAMCQ")
})(Kaart)


