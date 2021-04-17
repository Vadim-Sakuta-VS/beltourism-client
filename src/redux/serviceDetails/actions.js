export const SET_SERVICE_DATA = 'SERVICE_DETAILS/SET_SERVICE_DATA';
export const ADD_COMMENT = 'SERVICE_DETAILS/ADD_COMMENT';

export const setServiceData = (data) => ({
    type: SET_SERVICE_DATA,
    payload: data
});

export const addComment = (data) => ({
    type: ADD_COMMENT,
    payload: data
});