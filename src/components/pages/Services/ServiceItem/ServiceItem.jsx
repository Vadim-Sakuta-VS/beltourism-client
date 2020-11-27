import React from 'react';
import "./ServiceItem.scss"
import {NavLink} from "react-router-dom";
import {PropertyPrice} from "../../../Stocks/StockItem/Property/PropertyPrice";
import {Property} from "../../../Stocks/StockItem/Property/Property";
import {HotelStars} from "../../../HotelStars/HotelStars";
import {OpeningHours} from "../../../OpeningHours/OpeningHours";
import {NameLink} from "../NameLink/NameLink";
import {Location} from "../Location/Location";

const ServiceItem = ({id, type, name, description, price, stocks, opening_hours, locations, stars, rating}) => {
    let discount = stocks.length && stocks[0].discount;
    let location = locations[0];

    return (
        <div className="service-item">
            {discount ? <div className="discount">{discount}%</div> : null}
            <div className="service-item__row-1">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt=""/>
                <div className="data-main">
                    <div className="props-1">
                        <NameLink to={`/services/${type}/${id}`} value={name} classStyle="name-link"/>
                        <HotelStars stars={stars}/>
                    </div>
                    <div className="props-2">
                        {
                            discount
                                ? <PropertyPrice discount={discount} price={price}/>
                                : <Property type="Стоимость" value="10руб"
                                            icon={<i className="fas fa-coins"/>}/>
                        }
                        <Property type="Оценка" value={rating} icon={<i className="far fa-star"/>}/>
                        <OpeningHours opening_hours={opening_hours} isShowingAll={true}/>
                    </div>
                </div>
            </div>
            <div className="service-item__row-2">
                <div className="description">
                    {description}
                </div>
                <Location name={location.name} address={location.address}/>
            </div>
        </div>
    );
};

export default ServiceItem;