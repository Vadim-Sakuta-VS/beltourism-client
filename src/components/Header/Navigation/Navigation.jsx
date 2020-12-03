import React from "react";
import "./Navigation.scss";
import {Dropdown} from "./Dropdown/Dropdown";

export const Navigation = () => {
    const housing = {
        type: "Жилье",
        type_icon: <i className="fas fa-house-user"></i>,
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
        type_icon: <i className="fas fa-car-alt"></i>,
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
    const tourism = {
        type: "Туризм",
        type_icon: <i className="fas fa-route"></i>,
        subtypes: [
            {
                subtype: "Автобусные экскурсионные туры по городам",
                to: "/services?type=tourism&subType=bus-excursions"
            },
            {
                subtype: "Индивидуальные туры по Беларуси",
                to: "/services?type=tourism&subType=individual-excursions"
            },
            {
                subtype: "Велоэкскурсии по городам Беларуси",
                to: "/services?type=tourism&subType=bike-excursions"
            },
            {
                subtype: "Агротуризм",
                to: "/services?type=tourism&subType=agrotourism"
            },
        ]
    };
    const attractions = {
        type: "Достопримечательности",
        type_icon: <i className="fas fa-icons"></i>,
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
    const catering = {
        type: "Общепит",
        type_icon: <i className="fas fa-utensils"></i>,
        subtypes: [
            {
                subtype: "Рестораны",
                to: "/services?type=catering&subType=restaurant"
            },
            {
                subtype: "Кафе",
                to: "/services?type=catering&subType=cafe"
            },
            {
                subtype: "Бары",
                to: "/services?type=catering&subType=bar"
            },
        ]
    };

    return (
        <nav>
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
                        type={tourism.type}
                        type_icon={tourism.type_icon}
                        subtypes={tourism.subtypes}
                    />
                    <Dropdown
                        type={attractions.type}
                        type_icon={attractions.type_icon}
                        subtypes={attractions.subtypes}
                    />
                    <Dropdown
                        type={catering.type}
                        type_icon={catering.type_icon}
                        subtypes={catering.subtypes}
                    />
                </ul>
            </div>
        </nav>
    );
}