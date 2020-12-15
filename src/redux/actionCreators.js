import {
    HIDE_ALERT,
    HIDE_PAGE_LOADER,
    HIDE_PAGINATION_SERVICES_LOADER,
    HIDE_PAGINATION_STOCKS_LOADER_HOME, RESET_PAGE_NUMBER_SERVICES,
    RESET_PAGE_NUMBER_STOCKS_HOME, RESET_VALUES_ALERT,
    SET_COMMENTS_HOME, SET_PAGE_NUMBER_SERVICES,
    SET_PAGE_NUMBER_STOCKS_HOME, SET_SERVICES,
    SET_STOCKS_HOME, SHOW_ALERT,
    SHOW_PAGE_LOADER,
    SHOW_PAGINATION_SERVICES_LOADER,
    SHOW_PAGINATION_STOCKS_LOADER_HOME
} from "./actionTypes";
import {addAttractionService, addHousingService, addTransportService, loadServices, loadStocks} from "../api/api";

export function showPageLoader() {
    return {
        type: SHOW_PAGE_LOADER
    };
}

export function hidePageLoader() {
    return {
        type: HIDE_PAGE_LOADER
    };
}

export function showAlert(value, classStyle) {
    return {
        type: SHOW_ALERT,
        payload: {
            value,
            classStyle
        }
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    };
}

export function resetValuesAlert() {
    return {
        type: RESET_VALUES_ALERT
    };
}

export function initHomePage() {
    return async (dispatch, getState) => {
        try {
            dispatch(showPageLoader());

            let pageNumber = getState().home.pageNumberStocks;
            if (pageNumber === -1) {
                let stocks = await loadStocks(++pageNumber, 6);
                // console.log(stocks);
                dispatch(setStocksHome(testDataStocks));
                // dispatch(setStocksHome(stocks));
                if (testDataStocks.length) {
                    dispatch(setPageNumberStocksHome(pageNumber));
                }
            }

            dispatch(setCommentsHome(testDataComments));

            setTimeout(() => dispatch(hidePageLoader()), 1000);

        } catch (err) {
            setTimeout(() => dispatch(hidePageLoader()), 1000);
        }
    }
}

export function paginateStocksHome() {
    return async (dispatch, getState) => {
        try {
            dispatch(showPaginationStocksLoaderHome());
            let pageNumber = getState().home.pageNumberStocks;
            let stocks = await loadStocks(++pageNumber, 6);
            if (stocks.length) {
                dispatch(setPageNumberStocksHome(pageNumber));
            }
            setTimeout(() => {
                dispatch(setStocksHome(testDataStocks));
                dispatch(hidePaginationStocksLoaderHome());
            }, 1000);
        } catch (err) {
            setTimeout(() => {
                dispatch(hidePaginationStocksLoaderHome());
            }, 1000);
        }
    }
}

function showPaginationStocksLoaderHome() {
    return {
        type: SHOW_PAGINATION_STOCKS_LOADER_HOME
    }
}

function hidePaginationStocksLoaderHome() {
    return {
        type: HIDE_PAGINATION_STOCKS_LOADER_HOME
    }
}

function setStocksHome(stocks) {
    return {
        type: SET_STOCKS_HOME,
        payload: stocks
    }
}

function setPageNumberStocksHome(pageNumber) {
    return {
        type: SET_PAGE_NUMBER_STOCKS_HOME,
        payload: pageNumber
    }
}

export function resetPageNumberStocksHome() {
    return {
        type: RESET_PAGE_NUMBER_STOCKS_HOME,
    }
}

function setCommentsHome(comments) {
    return {
        type: SET_COMMENTS_HOME,
        payload: comments
    }
}

export function initServicesPage(paramsStr) {
    return async (dispatch, getState) => {
        try {
            dispatch(showPageLoader());

            let pageNumber = getState().services.pageNumberServices;
            // console.log(pageNumber)
            if (pageNumber === -1) {
                let services = await loadServices(++pageNumber, 20, paramsStr);
                // console.log(services);
                dispatch(setServices(testDataServices));
                // dispatch(setServices(services));
                if (testDataServices.length) {
                    dispatch(setPageNumberServices(pageNumber));
                }
            }

            setTimeout(() => dispatch(hidePageLoader()), 1000);

        } catch (err) {
            setTimeout(() => dispatch(hidePageLoader()), 1000);
        }
    }
}

export function paginateServices(paramsStr) {
    return async (dispatch, getState) => {
        try {
            dispatch(showPaginationServicesLoader());
            let pageNumber = getState().services.pageNumberServices;
            let services = await loadServices(++pageNumber, 20, paramsStr);
            if (services.length) {
                dispatch(setPageNumberServices(pageNumber));
            }
            setTimeout(() => {
                dispatch(setServices(testDataServices));
                dispatch(hidePaginationServicesLoader());
            }, 1000);
        } catch (err) {
            setTimeout(() => {
                dispatch(hidePaginationServicesLoader());
            }, 1000);
        }
    }
}

function showPaginationServicesLoader() {
    return {
        type: SHOW_PAGINATION_SERVICES_LOADER
    }
}

function hidePaginationServicesLoader() {
    return {
        type: HIDE_PAGINATION_SERVICES_LOADER
    }
}

function setServices(services) {
    return {
        type: SET_SERVICES,
        payload: services
    }
}

function setPageNumberServices(pageNumber) {
    return {
        type: SET_PAGE_NUMBER_SERVICES,
        payload: pageNumber
    }
}

export function resetPageNumberServices() {
    return {
        type: RESET_PAGE_NUMBER_SERVICES,
    }
}

////////////////////////////////////// Admin

function showServiceAlert(dispatch, setSubmitting, resetForm) {
    setSubmitting(false);
    resetForm();
    dispatch(showAlert("Услуга добавлена", "good"));
    setTimeout(() => {
        dispatch(hideAlert());
        setTimeout(() => dispatch(resetValuesAlert()), 500);
    }, 3000);
}

function hideServiceAlert(dispatch, setSubmitting) {
    setSubmitting(false);
    dispatch(showAlert("Что-то пошло не так", "error"));
    setTimeout(() => {
        dispatch(hideAlert());
        setTimeout(() => dispatch(resetValuesAlert()), 500);
    }, 3000);
}

export function addTransportServiceAdmin(obj, setSubmitting, resetForm) {
    return async (dispatch) => {
        try {
            let res = await addTransportService(obj);
            showServiceAlert(dispatch, setSubmitting, resetForm)
            console.log(res)

        } catch (err) {
            hideServiceAlert(dispatch, setSubmitting);
        }
    }
}

export function addAttractionServiceAdmin(obj, setSubmitting, resetForm) {
    return async (dispatch) => {
        try {
            let res = await addAttractionService(obj);
            showServiceAlert(dispatch, setSubmitting, resetForm)
        } catch (err) {
            hideServiceAlert(dispatch, setSubmitting);
        }
    }
}

export function addHousingServiceAdmin(obj, setSubmitting, resetForm) {
    return async (dispatch) => {
        try {
            let res = await addHousingService(obj);
            showServiceAlert(dispatch, setSubmitting, resetForm)
        } catch (err) {
            hideServiceAlert(dispatch, setSubmitting);
        }
    }
}

const testDataStocks = [
    {
        id: 1,
        service_name: "Аренда Volkswagen Tiguan",
        img_url: "https://dh.img.tam.by/320x218s/offers/0e/0/8fc9e3e25a7b85b390b45ae9b29c57e0-2.jpg",
        discount: 30,
        location: "Минск",
        mark: 9.1,
        price: 100
    },
    {
        id: 2,
        service_name: "Гродненский государственный музей истории религии",
        img_url: "https://ekskursii.by/images/obj3/102139/c18he5_3_true.jpg",
        discount: 20,
        location: "Гродно",
        mark: 8.5,
        price: 12
    },
    {
        id: 3,
        service_name: "Аренда Volkswagen Tiguan",
        img_url: "https://dh.img.tam.by/320x218s/offers/0e/0/8fc9e3e25a7b85b390b45ae9b29c57e0-2.jpg",
        discount: 30,
        location: "Минск",
        mark: 9.1,
        price: 100
    },
    {
        id: 4,
        service_name: "Гродненский государственный музей истории религии",
        img_url: "https://ekskursii.by/images/obj3/102139/c18he5_3_true.jpg",
        discount: 20,
        location: "Гродно",
        mark: 8.5,
        price: 12
    },
    {
        id: 5,
        service_name: "Аренда Volkswagen Tiguan",
        img_url: "https://dh.img.tam.by/320x218s/offers/0e/0/8fc9e3e25a7b85b390b45ae9b29c57e0-2.jpg",
        discount: 30,
        location: "Минск",
        mark: 9.1,
        price: 100
    },
    {
        id: 6,
        service_name: "Гродненский государственный музей истории религии",
        img_url: "https://ekskursii.by/images/obj3/102139/c18he5_3_true.jpg",
        discount: 20,
        location: "Гродно",
        mark: 8.5,
        price: 12
    },
];
const testDataComments = [
    {
        id: 1,
        service_name: "Аренда Volkswagen Tiguan (Слайд 1)",
        company_name: "Пилот-авто",
        location: "Минск",
        mark: 9,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                   architecto consequatur cupiditate deleniti dicta ducimus esse excepturi harum nam
                   necessitatibus odit, officia perferendis porro quaerat quis! Accusantium
                   doloribus facere natus.`,
        user_ns: "Алексей Костюков",
        date: "04.11.2020"
    },
    {
        id: 2,
        service_name: "Аренда Volkswagen Tiguan (Слайд 2)",
        company_name: "Пилот-авто",
        location: "Минск",
        mark: 9,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                   architecto consequatur cupiditate deleniti dicta ducimus esse excepturi harum nam
                   necessitatibus odit, officia perferendis porro quaerat quis! Accusantium
                   doloribus facere natus.`,
        user_ns: "Алексей Костюков",
        date: "04.11.2020"
    },
    {
        id: 3,
        service_name: "Аренда Volkswagen Tiguan (Слайд 3)",
        company_name: "Пилот-авто",
        location: "Минск",
        mark: 10,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                   architecto consequatur cupiditate deleniti dicta ducimus esse excepturi harum nam
                   necessitatibus odit, officia perferendis porro quaerat quis! Accusantium
                   doloribus facere natus.`,
        user_ns: "Алексей Костюков",
        date: "04.11.2020"
    },
    {
        id: 4,
        service_name: "Аренда Volkswagen Tiguan (Слайд 4)",
        company_name: "Пилот-авто",
        location: "Минск",
        mark: 8,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                   architecto consequatur cupiditate deleniti dicta ducimus esse excepturi harum nam
                   necessitatibus odit, officia perferendis porro quaerat quis! Accusantium
                   doloribus facere natus.`,
        user_ns: "Алексей Костюков",
        date: "04.11.2020"
    },
    {
        id: 5,
        service_name: "Аренда Volkswagen Tiguan (Слайд 5)",
        company_name: "Пилот-авто",
        location: "Минск",
        mark: 9,
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                   architecto consequatur cupiditate deleniti dicta ducimus esse excepturi harum nam
                   necessitatibus odit, officia perferendis porro quaerat quis! Accusantium
                   doloribus facere natus.`,
        user_ns: "Алексей Костюков",
        date: "04.11.2020"
    },
];
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
        facilities: [
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
            },
            {
                id: 2,
                name: "Минск",
                address: "ул. Авангардная 10",
                latitude: 27.918791,
                longitude: 54.802334,
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
        facilities: [
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
            },
            {
                id: 2,
                name: "Минск",
                address: "ул. Авангардная 10",
                latitude: 27.918791,
                longitude: 54.802334,
                region: {
                    id: 1,
                    name: "Минская область"
                }
            },
            {
                id: 3,
                name: "Гродно",
                address: "ул. Советская 15",
                latitude: 23.8222673,
                longitude: 53.6687634,
                region: {
                    id: 1,
                    name: "Гродненская область"
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
        facilities: [
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
        stocks: [],
        rating: 9.5,
        stars: null,
        center_distance: 5,
        category: null,
        facilities: [
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
            },
            {
                id: 2,
                name: "Минск",
                address: "ул. Авангардная 10",
                latitude: 27.918791,
                longitude: 54.802334,
                region: {
                    id: 1,
                    name: "Минская область"
                }
            },
            {
                id: 3,
                name: "Гродно",
                address: "ул. Советская 15",
                latitude: 23.8222673,
                longitude: 53.6687634,
                region: {
                    id: 1,
                    name: "Гродненская область"
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
        facilities: [
            {
                id: 1,
                facilityName: "sfsdfsd",
                extraPrice: 25
            }
        ]
    },
];