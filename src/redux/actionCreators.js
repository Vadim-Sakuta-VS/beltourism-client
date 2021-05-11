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
import {
    addAttractionService,
    addHousingService,
    addTransportService, loadLastComments,
    loadServices,
    loadStocks, saveServiceContactDetails, saveServiceLocation, saveServiceOpeningHours,
    saveServicePictures
} from '../api/api';

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
                dispatch(setStocksHome(testDataStocks));
                // dispatch(setStocksHome(stocks));
                if (testDataStocks.length) {
                    dispatch(setPageNumberStocksHome(pageNumber));
                }
            }

            let lastComments = await loadLastComments();
            lastComments = lastComments.map(async c=>{
               // const service = await loadServiceDetails(c.serviceId, c.serviceType);
            });

            dispatch(setCommentsHome(testDataComments));

            setTimeout(() => dispatch(hidePageLoader()), 1000);

        } catch (err) {
            dispatch(setCommentsHome(testDataComments));
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
            if (pageNumber === -1) {
                let services = await loadServices(++pageNumber, 20, paramsStr);
                dispatch(setServices(services));
                if (services.length) {
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
                dispatch(setServices(services));
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

export function showServiceAlert(setSubmitting, resetForm) {
    return (dispatch) => {
        setSubmitting(false);
        resetForm();
        dispatch(showAlert('Услуга добавлена', 'good'));
    }
}

export function showServiceAlertError(setSubmitting) {
    return (dispatch) => {
        setSubmitting && setSubmitting(false);
        dispatch(showAlert('Что-то пошло не так', 'error'));
    }
}

export function addTransportServiceAdmin(obj, setSubmitting, resetForm) {
    return async (dispatch) => {
        try {
            let objToSend = {
                'category': obj.category,
                'description': obj.description,
                'isActive': obj.isActive,
                'isBooked': obj.isBooked,
                'leaseType': obj.leaseType,
                'name': obj.name,
                'price': obj.price,
                'subType': obj.subType,
                'type': obj.type
            };
            let res = await addTransportService(objToSend,
                getHeadersObj(getAdminToken()));
            await saveCommonService(res.id, obj);
            dispatch(showServiceAlert(setSubmitting, resetForm));
        } catch (err) {
            dispatch(showServiceAlertError(setSubmitting));
        }
    }
}

export function addAttractionServiceAdmin(obj, setSubmitting, resetForm) {
    return async (dispatch) => {
        try {
            let objToSend = {
                'description': obj.description,
                'isActive': obj.isActive,
                'isBooked': obj.isBooked,
                'name': obj.name,
                'price': obj.price,
                'subType': obj.subType,
                'type': obj.type
            };
            let res = await addAttractionService(objToSend,
                getHeadersObj(getAdminToken()));
            await saveCommonService(res.id, obj);
            dispatch(showServiceAlert(setSubmitting, resetForm));
        } catch (err) {
            dispatch(showServiceAlertError(setSubmitting));
        }
    }
}

export function addHousingServiceAdmin(obj, setSubmitting, resetForm) {
    return async (dispatch) => {
        try {
            let objToSend = {
                'category': obj.category,
                'description': obj.description,
                'isActive': obj.isActive,
                'isBooked': obj.isBooked,
                'leaseType': obj.leaseType,
                'name': obj.name,
                'price': obj.price,
                'subType': obj.subType,
                'type': obj.type,
                'facilities': obj.facilities,
                'stars': obj.stars,
                'center_distance': obj.center_distance
            };
            let res = await addHousingService(objToSend,
                getHeadersObj(getAdminToken()));
            await saveCommonService(res.id, obj);
            dispatch(showServiceAlert(setSubmitting, resetForm));
        } catch (err) {
            dispatch(showServiceAlertError(setSubmitting));
        }
    }
}

async function saveCommonService(responseServiceId, obj){
    let objToSend = {
        id: responseServiceId,
        files: obj.pictureFiles
    }
    await saveServicePictures(objToSend,
        getHeadersObj(getAdminToken()));
    objToSend = {
        id: responseServiceId,
        openingHours: obj.openingHours
    }
    await saveServiceOpeningHours(objToSend,
        getHeadersObj(getAdminToken()));
    objToSend = {
        serviceId: responseServiceId,
        ...obj.location
    }
    obj.location && await saveServiceLocation(objToSend,
        getHeadersObj(getAdminToken()));
    objToSend = {
        serviceId: responseServiceId,
        ...obj.contactDetails
    }
    obj.contactDetails.email && await saveServiceContactDetails(objToSend,
        getHeadersObj(getAdminToken()));
}

export function getAdminToken() {
    return localStorage.getItem('admin-token');
}

export function getUserToken() {
    return localStorage.getItem('user-token');
}

export function getHeadersObj(token, contentType) {
    let headers = {};

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    if (contentType) {
        headers['Content-Type'] = contentType;
    } else {
        headers['Content-Type'] = 'application/json';
    }

    return headers;
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