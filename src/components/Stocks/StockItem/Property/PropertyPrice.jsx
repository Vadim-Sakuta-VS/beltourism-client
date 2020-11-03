import React from "react";
import "./Property.scss";
import "./PropertyPrice.scss";

export const PropertyPrice = ({discount, price}) => {
    let newPrice = price - (discount * price / 100);

    return (
        <div className="property">
            <i className="far fa-dot-circle"></i>
            <div className="property__content">
                <div className="content-text">
                    Стоимость:
                </div>
                <div className="content-value">
                    <span className="value">
                        <span className="price-old">{price}руб</span>
                        <span className="price-new">{newPrice}руб</span>
                    </span>
                    <i className="fas fa-coins"></i>
                </div>
            </div>
        </div>
    )
}