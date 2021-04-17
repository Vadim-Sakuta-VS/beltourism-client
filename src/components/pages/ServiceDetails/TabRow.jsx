import React from 'react';
import './ServiceDetails.scss';

export const TabRow = ({title, value, ...props}) => {
    return (
        <div className="tab-row" {...props}>
            <span className="tab-row__title">{title}:</span>
            <span className="tab-row__value">{value}</span>
        </div>
    );
}