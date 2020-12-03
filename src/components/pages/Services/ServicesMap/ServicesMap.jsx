import React from 'react';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import "./ServicesMap.scss";
import {MapContainer, Marker, Popup, TileLayer, Tooltip, ZoomControl} from "react-leaflet";
import L from "leaflet";
import {NameLink} from "../NameLink/NameLink";
import {Location} from "../../../Locations/Location/Location";
import {OpeningHours} from "../../../OpeningHours/OpeningHours";
import MarkerClusterGroup from "react-leaflet-markercluster";

L.Icon.Default.imagePath="https://unpkg.com/leaflet@1.5.0/dist/images/";

export const ServicesMap = ({services}) => {
    let markersElements=[];
    services.forEach(s=>{
        s.locations.forEach(l=>{
            markersElements.push(
                <Marker key={+`${s.id}${l.id}`} position={[l.longitude, l.latitude]}>
                    <Popup position>
                        <NameLink
                            to={`/services/${s.type}/${s.id}`}
                            value={s.name}
                            classStyle="name-link"
                        />
                        <Location city={l.name} address={l.address}/>
                        <OpeningHours opening_hours={s.opening_hours} isShowingAll={false}/>
                    </Popup>
                    <Tooltip>{s.name}</Tooltip>
                </Marker>
            )
        })
    })

    return (
        <div className="services__map-container">
            <MapContainer center={[53.902334, 27.5618791]} zoom={7} zoomControl={false} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ZoomControl position="topright"/>
                <MarkerClusterGroup>
                    {markersElements}
                </MarkerClusterGroup>
            </MapContainer>
        </div>
    );
};