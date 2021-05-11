import {SET_TYPE_LOADING, SET_USER_BOOKING_SERVICES, SET_USER_BOOKING_SERVICES_MORE, UPDATE_BOOKINGS} from './actions';

const initialState = {
    page: 0,
    data: [],
    isLoading: false
}

function bookingReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TYPE_LOADING:
            return {...state, isLoading: action.payload};
        case SET_USER_BOOKING_SERVICES:
            return {...state, data: action.payload, page: 1};
        case SET_USER_BOOKING_SERVICES_MORE:
            return {...state, data: [...state.data, ...action.payload], page: state.page + 1};
        case UPDATE_BOOKINGS:
            return initialState;
        default:
            return state;
    }
}

export {bookingReducer}