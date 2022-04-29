import React from 'react'
import { GoogleMap, LoadScript, InfoWindow} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};


function GoogleMaps({ center, title }) {

    const onLoad = (map) => {
        new window.google.maps.Marker({
            position: center,
            map,
            title: title,
          });
    };

    return (
            <GoogleMap
                onLoad={onLoad}
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
            >
            </GoogleMap>
    )
}


export default React.memo(GoogleMaps)