import {
    ADD_BOOKMARK,
    CLEAR_BOOKMARKS,
    DELETE_BOOKMARK,
    SET_BOOKMARKS_TYPE_LOADING,
    SET_BOOKMARKS_USER_DATA
} from './actions';

const initialState = {
    data: [],
    isLoading: false
}

function bookmarksReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BOOKMARKS_TYPE_LOADING:
            return {...state, isLoading: action.payload};
        case SET_BOOKMARKS_USER_DATA:
            return {...state, data: [...state.data, ...action.payload]};
        case ADD_BOOKMARK:
            return {...state, data: [...state.data, action.payload]};
        case DELETE_BOOKMARK:
            return {...state, data: state.data.filter(b => b.id !== action.payload)};
        case CLEAR_BOOKMARKS:
            return {...state, data: []};
        default:
            return state;
    }
}

export {bookmarksReducer};