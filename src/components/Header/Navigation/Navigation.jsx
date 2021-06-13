import React from "react";
import "./Navigation.scss";
import {Dropdown} from "./Dropdown/Dropdown";

export const Navigation = () => {
    const housing = {
        type: "Жилье",
        type_icon: <i className="fas fa-house-user"/>,
        subtypes: [
            {
                subtype: "Отели",
                to: "/services?type=housing&subType=hotel"
            },
            {
                subtype: "Квартиры",
                to: "/services?type=housing&subType=flat"
            },
            {
                subtype: "Загородные дома",
                to: "/services?type=housing&subType=country-houses"
            },
        ]
    };
    const transport = {
        type: "Транспорт",
        type_icon: <i className="fas fa-car-alt"/>,
        subtypes: [
            {
                subtype: "Авто",
                to: "/services?type=transport&subType=car"
            },
            {
                subtype: "Мото",
                to: "/services?type=transport&subType=moto"
            },
        ]
    };
    const attractions = {
        type: "Достопримечательности",
        type_icon: <i className="fas fa-icons"/>,
        subtypes: [
            {
                subtype: "Культурные объекты",
                to: "/services?type=attractions&subType=culture"
            },
            {
                subtype: "Религиозные объекты",
                to: "/services?type=attractions&subType=religion"
            },
            {
                subtype: "Архитектурные объекты",
                to: "/services?type=attractions&subType=architecture"
            },
            {
                subtype: "Развлекательные объекты",
                to: "/services?type=attractions&subType=entertainment"
            },
        ]
    };

    return (
        <nav className="navigation-menu">
            <div className="container">
                <ul className="menu">
                    <Dropdown
                        type={housing.type}
                        type_icon={housing.type_icon}
                        subtypes={housing.subtypes}
                    />
                    <Dropdown
                        type={transport.type}
                        type_icon={transport.type_icon}
                        subtypes={transport.subtypes}
                    />
                    <Dropdown
                        type={attractions.type}
                        type_icon={attractions.type_icon}
                        subtypes={attractions.subtypes}
                    />
                </ul>
            </div>
        </nav>
    );
}