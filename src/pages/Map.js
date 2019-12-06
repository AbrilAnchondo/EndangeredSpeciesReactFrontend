import React, { useState } from 'react';
import sanctuariesData from './sanctuaries';
import { Link } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";




function MyMap () {
    //using the usetate hook to keet track of the selected sanctuary
    //initially set to null because we haven't clicked anything
    const [selectedSanctuary, setSelectedSanctuary] = useState(null);
    return (
        <GoogleMap
        defaultZoom={4}
        defaultCenter={{lat: 40.730610, lng: -73.935242}}
        >
            {sanctuariesData.map(sanctuary => (
                <Marker 
                    key={sanctuary.name}
                    position={{lat: sanctuary.lat, lng: sanctuary.lng}}
                    onClick ={() => {
                        setSelectedSanctuary(sanctuary);
                    }}
                 />
            ))}

            {selectedSanctuary && (
                <InfoWindow  position={{lat: selectedSanctuary.lat, lng: selectedSanctuary.lng}}
                            onCloseClick={()=> {
                                setSelectedSanctuary(null);
                            }}>
                    <div>
                        <h6 style={{fontWeight: "bold"}}>{selectedSanctuary.name}</h6> 
                        <p>{selectedSanctuary.address}</p>
                        <p><a href={selectedSanctuary.website}>{selectedSanctuary.website}</a></p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>

    );
}

//withScriptjs embed google script on the page
//withGoogleMap to pass the map that will render on the screen
const WrappedMap = withScriptjs(withGoogleMap(MyMap));



export default function Map() {
    //console.log(sanctuariesData);

    return (
        <div style={{width: "100vw", height: "100vh"}}>
            <Link to="/species"><h4 style={{textAlign: "right"}}>back</h4></Link>
             <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
             />
            
        </div>
    )
}





