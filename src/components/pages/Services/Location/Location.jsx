import React from 'react';
import "./Location.scss"

export const Location = ({name, address}) => {
    return (
        <div className="location">
            <span className="city">{name},</span>
            <span className="address">{address}</span>
            <i className="fas fa-map-marker-alt"/>
        </div>
    );
};