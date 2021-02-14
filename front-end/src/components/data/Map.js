import React from 'react';
import { MapContainer, TileLayer, Maker, Popup } from 'react-leaflet';

const myMap = () => {
    const state = {
        lat: 37.7749,
        lng: -122.4194,
        zoom: 13
    }

    return (
        this.props.incidents ?
            <MapContainer
                center={[this.state.lat, this.state.lng]}
                zoom={this.state.zoom}
                style={{ width: '100%', height: '900px'}}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
                :
                'Data is loading...'
    )
}

export default myMap