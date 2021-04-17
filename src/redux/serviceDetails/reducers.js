import {ADD_COMMENT, SET_SERVICE_DATA} from './actions';

const initialState = {
    data: null
}

function getComments(oldComments, newComment) {
    const comments = oldComments || [];
    return [...comments, newComment];
}

function serviceDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SERVICE_DATA:
            return {...state, data: {...state.data, ...action.payload}};
        case ADD_COMMENT:
            return {
                ...state,
                data: {
                    ...state.data,
                    comments: getComments(state.data.comments, action.payload)
                }
            }
        default:
            return state;
    }
}

export {serviceDetailsReducer};