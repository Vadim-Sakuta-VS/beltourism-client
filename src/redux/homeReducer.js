import {
    HIDE_PAGINATION_STOCKS_LOADER_HOME,
    RESET_PAGE_NUMBER_STOCKS_HOME,
    SET_COMMENTS_HOME,
    SET_PAGE_NUMBER_STOCKS_HOME,
    SET_STOCKS_HOME, SHOW_PAGINATION_STOCKS_LOADER_HOME
} from "./actionTypes";

const initialState = {
    pageNumberStocks: -1,
    isShowingPaginationStocksLoader: false,
    stocks: [],
    comments: []
};

export function homeReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STOCKS_HOME:
            return {...state, stocks: state.stocks.concat(action.payload)};
        case SHOW_PAGINATION_STOCKS_LOADER_HOME:
            return {...state, isShowingPaginationStocksLoader: true};
        case HIDE_PAGINATION_STOCKS_LOADER_HOME:
            return {...state, isShowingPaginationStocksLoader: false};
        case SET_PAGE_NUMBER_STOCKS_HOME:
            return {...state, pageNumberStocks: action.payload};
        case RESET_PAGE_NUMBER_STOCKS_HOME:
            return {...state, pageNumberStocks: -1};
        case SET_COMMENTS_HOME:
            return {...state, comments: action.payload};
        default:
            return {...state};
    }
}