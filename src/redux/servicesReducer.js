import {
    HIDE_PAGINATION_SERVICES_LOADER,
    RESET_PAGE_NUMBER_SERVICES,
    SET_PAGE_NUMBER_SERVICES,
    SET_SERVICES,
    SHOW_PAGINATION_SERVICES_LOADER,
} from "./actionTypes";

const initialState = {
    pageNumberServices: -1,
    isShowingPaginationServicesLoader: false,
    services: [],
}

export function servicesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SERVICES:
            return {...state, services: state.services.concat(action.payload)};
        case SHOW_PAGINATION_SERVICES_LOADER:
            return {...state, isShowingPaginationServicesLoader: true};
        case HIDE_PAGINATION_SERVICES_LOADER:
            return {...state, isShowingPaginationServicesLoader: false};
        case SET_PAGE_NUMBER_SERVICES:
            return {...state, pageNumberServices: action.payload};
        case RESET_PAGE_NUMBER_SERVICES:
            return {...state, pageNumberServices: -1, services: []};
        default:
            return {...state};
    }
}