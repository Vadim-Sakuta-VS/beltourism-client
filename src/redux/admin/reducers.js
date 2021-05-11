import {
    CHANGE_STATUS_USERS_BOOKING,
    DELETE_SERVICE, DELETE_USERS_BOOKING,
    RESET_SERVICES_DELETING,
    SET_SERVICES_DELETING,
    SET_TYPE_LOADING_BOOKING,
    SET_USERS_BOOKING_SERVICES,
    SET_USERS_BOOKING_SERVICES_MORE,
    UPDATE_BOOKINGS
} from './actions';


const initialState = {
    deleting: {
        page: 0,
        services: []
    },
    booking: {
        page: 0,
        data: [],
        isLoading: false
    }
}

function adminReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SERVICES_DELETING:
            return {
                ...state,
                deleting: {
                    page: state.deleting.page + 1,
                    services: [...state.deleting.services, ...action.payload]
                }
            }
        case RESET_SERVICES_DELETING:
            return {
                ...state,
                deleting: {
                    page: 0,
                    services: []
                }
            }
        case DELETE_SERVICE:
            return {
                ...state,
                deleting: {
                    ...state.deleting,
                    services: state.deleting.services.filter(s => s.service.id !== action.payload)
                }
            }
        case SET_TYPE_LOADING_BOOKING:
            return {...state, booking: {...state.booking, isLoading: action.payload}};
        case SET_USERS_BOOKING_SERVICES:
            return {
                ...state,
                booking: {...state.booking, data: action.payload, page: 1}
            };
        case SET_USERS_BOOKING_SERVICES_MORE:
            return {
                ...state,
                booking: {
                    ...state.booking,
                    data: [...state.booking.data, ...action.payload],
                    page: state.booking.page + 1
                }
            };
        case UPDATE_BOOKINGS:
            return {...state, booking: initialState.booking};
        case CHANGE_STATUS_USERS_BOOKING:
            return {
                ...state, booking: {
                    ...state.booking, data: state.booking.data.map(b => {
                        if (b.id === action.payload.id) {
                            return {...b, status: action.payload.status}
                        }
                        return b;
                    })
                }
            }
        case DELETE_USERS_BOOKING:
            return {
                ...state, booking: {
                    ...state.booking, data: state.booking.data.filter(b => b.id !== action.payload)
                }
            }
        default:
            return state;
    }
}

export {adminReducer};