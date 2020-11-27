import React from 'react';
import "./HotelStars.scss";

export const HotelStars = ({stars}) => {
    let starsElements = [];
    for (let i = 0; i < stars; i++) {
        starsElements.push(<span key={i} className="star"/>)
    }

    return (
        starsElements.length
            ? <div className="hotel-stars">{starsElements}</div>
            : null
    );
};