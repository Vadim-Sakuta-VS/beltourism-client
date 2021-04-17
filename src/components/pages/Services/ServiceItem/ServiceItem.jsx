import React from 'react';
import './ServiceItem.scss'
import {PropertyPrice} from '../../../Stocks/StockItem/Property/PropertyPrice';
import {Property} from '../../../Stocks/StockItem/Property/Property';
import {HotelStars} from '../../../HotelStars/HotelStars';
import {OpeningHours} from '../../../OpeningHours/OpeningHours';
import {NameLink} from '../NameLink/NameLink';
import {Location} from '../../../Locations/Location/Location';
import {useSpring, animated} from 'react-spring';

const ServiceItem = ({service}) => {
    const props = useSpring({
        from: {opacity: 0},
        to: {opacity: 1}
    });
    // let discount = stocks && stocks[0].discount;

    const type = service.service.type;
    const id = service.service.id;
    const name = service.service.name;
    const imgUrl = Object.values(service.pictures)[0];
    const openingHours = service.openingHours;
    const discount = service.stocks;
    const price = service.service.price;
    const description = service.service.description;
    const stars = service.service.stars;
    const locations = service.locations;

    return (
        <animated.div className="service-item" style={props}>
            {/*{discount ? <div className="discount">{discount}%</div> : null}*/}
            <div className="service-item__row-1">
                {imgUrl && <img src={imgUrl} alt=""/>}
                <div className="data-main">
                    <div className="props-1">
                        <NameLink to={`/services/${type}/${id}`} value={name} classStyle="name-link"/>
                        {stars && <HotelStars stars={stars}/>}
                    </div>
                    <div className="props-2">
                        {
                            discount
                                ? <PropertyPrice discount={discount} price={price}/>
                                : <Property type="Стоимость" value={`${price}руб`}
                                            icon={<i className="fas fa-coins"/>}/>
                        }
                        {/*<Property type="Оценка" value={rating} icon={<i className="far fa-star"/>}/>*/}
                        {openingHours && <OpeningHours openingHours={openingHours} isShowingAll={true}/>}
                    </div>
                </div>
            </div>
            {(description || (locations && locations[0].name && locations[0].address))
            && <div className="service-item__row-2">
                {description && <div className="description">
                    {description}
                </div>}
                {locations && locations[0].name && locations[0].address &&
                <Location city={locations[0].name} address={locations[0].address}/>}
            </div>}
        </animated.div>
    );
};

export default ServiceItem;