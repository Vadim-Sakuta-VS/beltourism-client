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
                to: "#"
            },
            {
                subtype: "Квартиры",
                to: "#"
            },
            {
                subtype: "Загородные дома",
                to: "#"
            },
        ]
    };
    const transport = {
        type: "Транспорт",
        type_icon: <i className="fas fa-car-alt"></i>,
        subtypes: [
            {
                subtype: "Авто",
                to: "#"
            },
            {
                subtype: "Мото",
                to: "#"
            },
        ]
    };
    const tourism = {
        type: "Туризм",
        type_icon: <i className="fas fa-route"></i>,
        subtypes: [
            {
                subtype: "Автобусные экскурсионные туры по городам",
                to: "#"
            },
            {
                subtype: "Индивидуальные туры по Беларуси",
                to: "#"
            },
            {
                subtype: "Велоэкскурсии по городам Беларуси",
                to: "#"
            },
            {
                subtype: "Агротуризм",
                to: "#"
            },
        ]
    };
    const attractions = {
        type: "Достопримечательности",
        type_icon: <i className="fas fa-icons"></i>,
        subtypes: [
            {
                subtype: "Культурные объекты",
                to: "#"
            },
            {
                subtype: "Религиозные объекты",
                to: "#"
            },
            {
                subtype: "Архитектурные объекты",
                to: "#"
            },
            {
                subtype: "Развлекательные объекты",
                to: "#"
            },
        ]
    };
    const catering = {
        type: "Общепит",
        type_icon: <i className="fas fa-utensils"></i>,
        subtypes: [
            {
                subtype: "Рестораны",
                to: "#"
            },
            {
                subtype: "Кафе",
                to: "#"
            },
            {
                subtype: "Бары",
                to: "#"
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