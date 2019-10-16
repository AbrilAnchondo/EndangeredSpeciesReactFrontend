import React, { useState } from 'react';
import sanctuariesData from './sanctuaries';
import { Link } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";




function MyMap () {
    
    const [selectedSanctuary, setSelectedSanctuary] = useState(null);
    return (
        <GoogleMap
        defaultZoom={4}
        defaultCenter={{lat: 40.730610, lng: -73.935242}}
        >
            {sanctuariesData.map(sanctuary => (
                <Marker 
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

const WrappedMap = withScriptjs(withGoogleMap(MyMap));



export default function Map() {
  
    return (
        <div style={{width: "100vw", height: "100vh"}}>
            <Link to="/species"><h4 style={{textAlign: "right"}}>back</h4></Link>
             <WrappedMap
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="+process.env.REACT_APP_GOOGLE_API_KEY}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
             />
            
        </div>
    )
}





// AIzaSyA-DXLbBsOG9SFahYLUTlgBCFfcLcm14vA