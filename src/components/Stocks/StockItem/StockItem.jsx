import React from "react";
import "./StockItem.scss";
import {NavLink} from "react-router-dom";
import {Property} from "./Property/Property";
import {PropertyPrice} from "./Property/PropertyPrice";

export const StockItem = ({service_name, img_url, discount, location, mark, price}) => {
    const serviceNameShort = service_name.length > 33 ? `${service_name.slice(0, 33)}...` : service_name;

    return (
        <NavLink className="stock-item-link" to="#">
            <div className="stock-item">
                <div className="stock-item__wrap-data">
                    <img src={`${img_url}`} alt="img"/>
                    <div className="discount">{discount}%</div>
                    <div className="info-more">
                        <span>узнать больше</span><i className="fas fa-arrow-right"></i>
                    </div>
                </div>
                <div className="stock-item__text-content">
                    <div className="service-name" title={service_name}>{serviceNameShort}</div>
                    <div className="properties-wrap">
                        <div className="properties">
                            <Property
                                type="Месторосположение"
                                value={location}
                                icon={<i className="fas fa-map-marker-alt"></i>}
                            />
                            <Property
                                type="Оценка"
                                value={mark}
                                icon={<i className="far fa-star"></i>}
                            />
                            <PropertyPrice discount={discount} price={price}/>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}