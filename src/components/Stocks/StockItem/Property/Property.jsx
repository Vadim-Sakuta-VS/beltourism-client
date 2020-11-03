import React from "react";
import "./Property.scss";

export const Property = ({type, value, icon}) => {
    return (
        <div className="property">
            <i className="far fa-dot-circle"></i>
            <div className="property__content">
                <div className="content-text">
                    {type}:
                </div>
                <div className="content-value">
                    <span className="value">{value}</span>
                    {icon}
                </div>
            </div>
        </div>
    )
}