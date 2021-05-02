import {
    DELETE_SERVICE,
    RESET_SERVICES_DELETING,
    SET_SERVICES_DELETING
} from './actions';

const initialState = {
    deleting: {
        page: 0,
        services: []
    },
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
            console.log(action.payload);
            console.log(typeof action.payload);
            console.log(state.deleting.services.filter(s => s.service.id !== action.payload));
            return {
                ...state,
                deleting: {
                    ...state.deleting,
                    services: state.deleting.services.filter(s => s.service.id !== action.payload)
                }
            }
        default:
            return state;
    }
}

export {adminReducer};