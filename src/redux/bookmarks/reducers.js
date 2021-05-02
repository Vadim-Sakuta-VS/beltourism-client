import {
    ADD_BOOKMARK,
    CLEAR_BOOKMARKS,
    DELETE_BOOKMARK,
    SET_BOOKMARKS_TYPE_LOADING,
    SET_BOOKMARKS_USER_DATA
} from './actions';

const initialState = {
    data: [],
    services: [],
    isLoading: false
}

function bookmarksReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BOOKMARKS_TYPE_LOADING:
            return {...state, isLoading: action.payload};
        case SET_BOOKMARKS_USER_DATA:
            return {
                ...state,
                data: action.payload.bookmarks,
                services: action.payload.services
            };
        case ADD_BOOKMARK:
            return {
                ...state,
                data: [...state.data, action.payload.bookmark],
                services: [...state.services, action.payload.service],
            };
        case DELETE_BOOKMARK:
            let serviceId;
            return {
                ...state,
                data: state.data.filter(b => {
                    const result = b.id !== action.payload;
                    if (!result) {
                        serviceId = b.serviceId;
                    }
                    return result;
                }),
                services: state.services.filter(s => s.service.id !== serviceId),
            };
        case CLEAR_BOOKMARKS:
            return initialState;
        default:
            return state;
    }
}

export {bookmarksReducer};