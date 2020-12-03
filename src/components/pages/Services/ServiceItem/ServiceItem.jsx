import React from 'react';
import "./ServiceItem.scss"
import {PropertyPrice} from "../../../Stocks/StockItem/Property/PropertyPrice";
import {Property} from "../../../Stocks/StockItem/Property/Property";
import {HotelStars} from "../../../HotelStars/HotelStars";
import {OpeningHours} from "../../../OpeningHours/OpeningHours";
import {NameLink} from "../NameLink/NameLink";
import {Location} from "../../../Locations/Location/Location";
import {useSpring, animated} from "react-spring";
import {Locations} from "../../../Locations/Locations";

const ServiceItem = ({id, type, name, description, price, contactDetails, stocks, opening_hours, locations, stars, rating}) => {
    const props = useSpring({
        from: {opacity: 0},
        to: {opacity: 1}
    });
    let discount = stocks.length && stocks[0].discount;

    return (
        <animated.div className="service-item" style={props}>
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
                {
                    locations.length > 1
                        ? <Locations
                            contactDetailsName={contactDetails.name}
                            locations={locations}
                        />
                        : <Location
                            contactDetailsName={contactDetails.name}
                            city={locations[0].name}
                            address={locations[0].address}
                        />
                }
            </div>
        </animated.div>
    );
};

export default ServiceItem;