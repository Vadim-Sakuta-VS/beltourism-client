import React, {useEffect} from 'react';
import {MapContainer, TileLayer, useMap, ZoomControl} from 'react-leaflet';
import L from "leaflet";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import "leaflet/dist/leaflet.js";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js";
import LCG from 'leaflet-control-geocoder';
import './Location.scss';

function SearchControl({setFieldValue}) {
    const map = useMap();

    useEffect(()=>{
        const geocoder = LCG.nominatim();
        let marker;

        map.on('click', e => {
            geocoder.reverse(e.latlng, map.options.crs.scale(map.getZoom()), results => {
                const r = results[0];
                if (r) {
                    if (marker) {
                        marker.
                        setLatLng(r.center).
                        setPopupContent(r.html || r.name).
                        openPopup();
                    } else {
                        marker = L.marker(r.center)
                            .bindPopup(r.name)
                            .addTo(map)
                            .openPopup();
                    }
                    setFieldValue('location', {
                        name: r.properties.address.town
                            || r.properties.address.village || r.properties.address.city,
                        address: `${r.properties.address.road} ${r.properties.address.house_number}`,
                        latitude: r.center.lat,
                        longitude: r.center.lng,
                    });
                }
            })
        })
    }, [])

    return null;
}

const Location = (props) => {

    return (
        <div className="location-add">
            <h3 className='location-add__title'>Локация</h3>
            <p>Необходимо кликнуть по месту на карте для получения адреса,
                строку для поиска пока не удалось добавить</p>
            <MapContainer
                center={[53.902334, 27.5618791]}
                zoom={7} zoomControl={false}
                scrollWheelZoom={true}
                style={{height: '600px'}}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ZoomControl position="topright"/>
                <SearchControl setFieldValue={props.setFieldValue}/>
            </MapContainer>
        </div>
    );
};

export default Location;