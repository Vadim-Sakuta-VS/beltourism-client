import {HIDE_ALERT, HIDE_PAGE_LOADER, RESET_VALUES_ALERT, SHOW_ALERT, SHOW_PAGE_LOADER} from "./actionTypes";

const initialState = {
    isShowingPageLoader: false,
    isShowingAlert: false,
    alertClassStyle: "",
    alertValue: ""
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_PAGE_LOADER:
            return {...state, isShowingPageLoader: true};
        case HIDE_PAGE_LOADER:
            return {...state, isShowingPageLoader: false};
        case SHOW_ALERT:
            return {
                ...state, isShowingAlert: true,
                alertClassStyle: action.payload.classStyle, alertValue: action.payload.value
            };
        case HIDE_ALERT: return {...state, isShowingAlert: false};
        case RESET_VALUES_ALERT: return {...state, alertClassStyle: "", alertValue: ""};
        default:
            return {...state};
    }
}