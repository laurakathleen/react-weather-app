import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render() {
        //ref allows us to get a reference to an HTML element that has been rendered to the page using this.refs.map
        return <div ref="map" />;
    }
}

export default GoogleMap;