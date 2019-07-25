import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper, Listing, findPlaceFromQuery, fetchPlaces } from 'google-maps-react'


class Kaart extends Component {

    // constructor() {
    //     super()
    //     this.markers = []
    // }

    fetchPlaces(mapProps, map) {



        const { google } = mapProps;
        const service = new google.maps.places.PlacesService(map);
        console.log('hoi')
        var request = {
            query: 'IJswinkel',
            fields: ['name', 'geometry'],
        };

        service.findPlaceFromQuery(request, (results, status) => {
            const markers = []

            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log('Got results', results);
                for (var i = 0; i < results.length; i++) {
                    markers.push(
                        <Marker
                            name={results[i].name}
                            position={results[i].geometry.location} />
                    )
                }

                map.setCenter(results[0].geometry.location);
            }
        });
    }



    render() {
        return (
            <Map
                onReady={this.fetchPlaces}
                style={{ width: '50%', height: '50%' }}
                initialCenter={{
                    lat: 51.9224165,
                    lng: 4.4310972
                }}
                google={this.props.google} zoom={14}>
                {this.markers}
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Current location'} />
                {/* <Listing places="this.state.places" */}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAu2x3CWxFl8iNP1dqfcNYdBRcI8ytAMCQ")
})(Kaart)


