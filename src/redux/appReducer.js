import {HIDE_PAGE_LOADER, SHOW_PAGE_LOADER} from "./actionTypes";

const initialState = {
    isShowingPageLoader: false
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_PAGE_LOADER:
            return {...state, isShowingPageLoader: true};
        case HIDE_PAGE_LOADER:
            return {...state, isShowingPageLoader: false};
        default:
            return {...state};
    }
}