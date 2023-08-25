import { Map, NavigationControl, Marker, GeolocateControl } from "react-map-gl";

const MyMap = () => {

    return ( 
        <Map maplib={import('mapbox-gl')} 
            mapboxAccessToken={process.env.REACT_APP_MAPBOX}
            
            style={{width: "100vw", height: "50vh"}}

            mapStyle="mapbox://styles/mapbox/streets-v9"

            initialViewState={{
                latitude: 55.7060378,
                longitude: 12.5142235,
                zoom: 16
            }}

            >
            <NavigationControl />

            <Marker latitude={55.7060378} longitude={12.5142235}></Marker>
            <GeolocateControl 
            trackUserLocation={true} 
            positionOptions={{ enableHighAccuracy: true }}
            showAccuracyCircle={true}
            auto
            />            
        </Map>
     );
}
 
export default MyMap;