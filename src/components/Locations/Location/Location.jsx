import React from 'react';
import "./Location.scss"

export const Location = ({contactDetailsName, city, address, classStyle}) => {
    return (
        <div className={`location ${classStyle || ""}`}>
            {
                contactDetailsName
                    ? <span className="contact-details-name">{contactDetailsName},</span>
                    : null
            }
            <span className="city">{city}</span>
            {
                address
                    ? <>
                        <span>,</span><span className="address">{address}</span>
                      </>
                    : null
            }
            <i className="fas fa-map-marker-alt"/>
        </div>
    );
};