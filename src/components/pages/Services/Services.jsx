import React from 'react';
import "./Services.scss"
import {useLocation, Redirect} from "react-router-dom"
import {POPUPS_FORMS, SERVICES} from "../../../constants/constants";
import ServiceItem from "./ServiceItem/ServiceItem";
import {ServicesMap} from "./ServicesMap/ServicesMap";
import PaginationButton from "../../PaginationButton/PaginationButton";

const Services = ({history, setPopupInfo, ...props}) => {
    let query = new URLSearchParams(useLocation().search);

    let type = query.get("type");
    let subtype = query.get("subtype");
    if (!type || !subtype) {
        return <Redirect to="/page404"/>;
    }

    const testDataServices = [
        {
            id: 1,
            name: "Балденини Кафе / Baldenini Cafe",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci amet autem dolore eum fugiat, harum ipsa iure laudantium magni molestiae, nihil placeat quae quas quibusdam reiciendis repellendus, ut voluptate?",
            type: "catering",
            subtype: "cafe",
            price: 12.50,
            isBooked: false,
            isActive: true,
            contactDetails: {
                id: 1,
                name: "dsfasdf",
                phoneNumber: 541231,
                mobilePhone: 375331234567,
                email: "qwerty@gmail.com",
                address: "sdfsadf"
            },
            locations: [
                {
                    id: 1,
                    name: "Минск",
                    address: "ул. Будславская 2",
                    latitude: 27.5618791,
                    longitude: 53.902334,
                    region: {
                        id: 1,
                        name: "Минская область"
                    }
                }
            ],
            pictures: [
                {
                    id: 1,
                    pictureUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
                    isActive: true
                }
            ],
            opening_hours: [
                {
                    id: 1,
                    day_of_week: "Понедельник",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 2,
                    day_of_week: "Вторник",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 3,
                    day_of_week: "Среда",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 4,
                    day_of_week: "Четверг",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 5,
                    day_of_week: "Пятница",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 6,
                    day_of_week: "Суботта",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 7,
                    day_of_week: "Воскресенье",
                    open_time: "7:00",
                    close_time: "20:00",
                },
            ],
            stocks: [],
            rating: 9.5,
            stars: null,
            center_distance: 3,
            category: null,
            facilities:[
                {
                    id: 1,
                    facilityName: "sfsdfsd",
                    extraPrice: 25
                }
            ]
        },
        {
            id: 2,
            name: "Балденини Кафе / Baldenini Cafe",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci amet autem dolore eum fugiat, harum ipsa iure laudantium magni molestiae, nihil placeat quae quas quibusdam reiciendis repellendus, ut voluptate?",
            type: "catering",
            subtype: "cafe",
            price: 12.50,
            isBooked: false,
            isActive: true,
            contactDetails: {
                id: 1,
                name: "dsfasdf",
                phoneNumber: 541231,
                mobilePhone: 375331234567,
                email: "qwerty@gmail.com",
                address: "sdfsadf"
            },
            locations: [
                {
                    id: 1,
                    name: "Минск",
                    address: "ул. Будславская 2",
                    latitude: 27.5618791,
                    longitude: 54.902334,
                    region: {
                        id: 1,
                        name: "Минская область"
                    }
                }
            ],
            pictures: [
                {
                    id: 1,
                    pictureUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
                    isActive: true
                }
            ],
            opening_hours: [
                {
                    id: 1,
                    day_of_week: "Понедельник",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 2,
                    day_of_week: "Вторник",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 3,
                    day_of_week: "Среда",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 4,
                    day_of_week: "Четверг",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 5,
                    day_of_week: "Пятница",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 6,
                    day_of_week: "Суботта",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 7,
                    day_of_week: "Воскресенье",
                    open_time: "7:00",
                    close_time: "20:00",
                },
            ],
            stocks: [
                {
                    id: 1,
                    discount: 10,
                    beginDate: "2012-02-02",
                    endDate: "2012-02-03",
                }
            ],
            rating: 9.5,
            stars: null,
            center_distance: 3,
            category: null,
            facilities:[
                {
                    id: 1,
                    facilityName: "sfsdfsd",
                    extraPrice: 25
                }
            ]
        },
        {
            id: 3,
            name: "Балденини Кафе / Baldenini Cafe",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci amet autem dolore eum fugiat, harum ipsa iure laudantium magni molestiae, nihil placeat quae quas quibusdam reiciendis repellendus, ut voluptate?",
            type: "catering",
            subtype: "cafe",
            price: 12.50,
            isBooked: false,
            isActive: true,
            contactDetails: {
                id: 1,
                name: "dsfasdf",
                phoneNumber: 541231,
                mobilePhone: 375331234567,
                email: "qwerty@gmail.com",
                address: "sdfsadf"
            },
            locations: [
                {
                    id: 1,
                    name: "Минск",
                    address: "ул. Будславская 2",
                    latitude: 27.718791,
                    longitude: 53.902334,
                    region: {
                        id: 1,
                        name: "Минская область"
                    }
                }
            ],
            pictures: [
                {
                    id: 1,
                    pictureUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
                    isActive: true
                }
            ],
            opening_hours: [
                {
                    id: 1,
                    day_of_week: "Понедельник",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 2,
                    day_of_week: "Вторник",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 3,
                    day_of_week: "Среда",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 4,
                    day_of_week: "Четверг",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 5,
                    day_of_week: "Пятница",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 6,
                    day_of_week: "Суботта",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 7,
                    day_of_week: "Воскресенье",
                    open_time: "7:00",
                    close_time: "20:00",
                },
            ],
            stocks: [
                {
                    id: 1,
                    discount: 10,
                    beginDate: "2012-02-02",
                    endDate: "2012-02-03",
                }
            ],
            rating: 9.5,
            stars: 5,
            center_distance: 3,
            category: null,
            facilities:[
                {
                    id: 1,
                    facilityName: "sfsdfsd",
                    extraPrice: 25
                }
            ]
        },
        {
            id: 4,
            name: "Балденини Кафе / Baldenini Cafe",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci amet autem dolore eum fugiat, harum ipsa iure laudantium magni molestiae, nihil placeat quae quas quibusdam reiciendis repellendus, ut voluptate?",
            type: "catering",
            subtype: "cafe",
            price: 12.50,
            isBooked: false,
            isActive: true,
            contactDetails: {
                id: 1,
                name: "dsfasdf",
                phoneNumber: 541231,
                mobilePhone: 375331234567,
                email: "qwerty@gmail.com",
                address: "sdfsadf"
            },
            locations: [
                {
                    id: 1,
                    name: "Минск",
                    address: "ул. Будславская 2",
                    latitude: 28.5618791,
                    longitude: 53.902334,
                    region: {
                        id: 1,
                        name: "Минская область"
                    }
                }
            ],
            pictures: [
                {
                    id: 1,
                    pictureUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
                    isActive: true
                }
            ],
            opening_hours: [
                {
                    id: 1,
                    day_of_week: "Понедельник",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 2,
                    day_of_week: "Вторник",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 3,
                    day_of_week: "Среда",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 4,
                    day_of_week: "Четверг",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 5,
                    day_of_week: "Пятница",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 6,
                    day_of_week: "Суботта",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 7,
                    day_of_week: "Воскресенье",
                    open_time: "7:00",
                    close_time: "20:00",
                },
            ],
            stocks: [ ],
            rating: 9.5,
            stars: null,
            center_distance: 5,
            category: null,
            facilities:[
                {
                    id: 1,
                    facilityName: "sfsdfsd",
                    extraPrice: 25
                }
            ]
        },
        {
            id: 5,
            name: "Балденини Кафе / Baldenini Cafe",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci amet autem dolore eum fugiat, harum ipsa iure laudantium magni molestiae, nihil placeat quae quas quibusdam reiciendis repellendus, ut voluptate?",
            type: "catering",
            subtype: "cafe",
            price: 12.50,
            isBooked: false,
            isActive: true,
            contactDetails: {
                id: 1,
                name: "dsfasdf",
                phoneNumber: 541231,
                mobilePhone: 375331234567,
                email: "qwerty@gmail.com",
                address: "sdfsadf"
            },
            locations: [
                {
                    id: 1,
                    name: "Минск",
                    address: "ул. Будславская 2",
                    latitude: 27.5618791,
                    longitude: 52.902334,
                    region: {
                        id: 1,
                        name: "Минская область"
                    }
                }
            ],
            pictures: [
                {
                    id: 1,
                    pictureUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
                    isActive: true
                }
            ],
            opening_hours: [
                {
                    id: 1,
                    day_of_week: "Понедельник",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 2,
                    day_of_week: "Вторник",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 3,
                    day_of_week: "Среда",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 4,
                    day_of_week: "Четверг",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 5,
                    day_of_week: "Пятница",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 6,
                    day_of_week: "Суботта",
                    open_time: "7:00",
                    close_time: "20:00",
                },
                {
                    id: 7,
                    day_of_week: "Воскресенье",
                    open_time: "7:00",
                    close_time: "20:00",
                },
            ],
            stocks: [
                {
                    id: 1,
                    discount: 10,
                    beginDate: "2012-02-02",
                    endDate: "2012-02-03",
                }
            ],
            rating: 9.5,
            stars: null,
            center_distance: 3,
            category: null,
            facilities:[
                {
                    id: 1,
                    facilityName: "sfsdfsd",
                    extraPrice: 25
                }
            ]
        },
    ];

    let serviceItemsElements = testDataServices.map(s => <ServiceItem key={s.id} {...s}/>);

    return (
        <div className="services">
            <header className="services__header">
                <h2 className="services__header-title">
                    Услуги/{SERVICES[type].type}/{SERVICES[type].subtypes[subtype]}
                </h2>
                <button
                    className="btn btn-filters"
                    onClick={() => setPopupInfo({activeForm: POPUPS_FORMS.FILTERS, fromFormClosed: ""})}
                >
                    <i className="fas fa-align-justify"/>
                    <span>Фильтры</span>
                </button>
            </header>
            <div className="services__main-content">
                <div className="main-content__row-1">
                    <div className="services__items">
                        {serviceItemsElements}
                    </div>
                    <PaginationButton callback={()=>{}} classStyle="btn__load-more-b"/>
                </div>
                <ServicesMap services={testDataServices}/>
            </div>
        </div>
    );
};

export default Services;