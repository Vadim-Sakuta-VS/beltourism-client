export const SET_SERVICES_DELETING = 'ADMIN/SET_SERVICES_DELETING';
export const DELETE_SERVICE = 'ADMIN/DELETE_SERVICE';
export const RESET_SERVICES_DELETING = 'ADMIN/RESET_PAGE_NUMBER';
export const SET_USERS_BOOKING_SERVICES = 'ADMIN/SET_USERS_BOOKING_SERVICES';
export const SET_USERS_BOOKING_SERVICES_MORE = 'ADMIN/SET_USERS_BOOKING_SERVICES_MORE';
export const SET_TYPE_LOADING_BOOKING = 'ADMIN/SET_TYPE_LOADING_BOOKING';
export const UPDATE_BOOKINGS = 'ADMIN/UPDATE_BOOKINGS';
export const CHANGE_STATUS_USERS_BOOKING = 'ADMIN/CHANGE_STATUS_USERS_BOOKING';
export const DELETE_USERS_BOOKING = 'ADMIN/DELETE_USERS_BOOKING';
export const UPDATE_COMMENTS = 'ADMIN/UPDATE_COMMENTS';
export const SET_TYPE_LOADING_COMMENTS = 'ADMIN/SET_TYPE_LOADING_COMMENTS';
export const SET_USERS_COMMENTS_SERVICES = 'ADMIN/SET_USERS_COMMENTS_SERVICES';
export const SET_USERS_COMMENTS_SERVICES_MORE = 'ADMIN/SET_USERS_COMMENTS_SERVICES_MORE';
export const DELETE_USERS_COMMENTS = 'ADMIN/DELETE_USERS_COMMENTS';

export const setServicesDeleting = (services) => ({
    type: SET_SERVICES_DELETING,
    payload: services
});

export const deleteServiceCreator = (id) => ({
    type: DELETE_SERVICE,
    payload: id
});

export const resetServicesDeleting = () => ({
    type: RESET_SERVICES_DELETING,
});

export const setUsersBookingServices = (services) => ({
    type: SET_USERS_BOOKING_SERVICES,
    payload: services
});

export const setUsersBookingServicesMore = (services) => ({
    type: SET_USERS_BOOKING_SERVICES_MORE,
    payload: services
});

export const setTypeLoadingBooking = (isLoading) => ({
    type: SET_TYPE_LOADING_BOOKING,
    payload: isLoading
});

export const updateBookings = () => ({
    type: UPDATE_BOOKINGS,
});

export const changeStatusUsersBooking = (id, status) => ({
    type: CHANGE_STATUS_USERS_BOOKING,
    payload: {id, status}
});

export const deleteUsersBooking = (id) => ({
    type: DELETE_USERS_BOOKING,
    payload: id
});

export const setUsersCommentsServices = (comments) => ({
    type: SET_USERS_COMMENTS_SERVICES,
    payload: comments
});

export const setUsersCommentsServicesMore = (comments) => ({
    type: SET_USERS_COMMENTS_SERVICES_MORE,
    payload: comments
});

export const setTypeLoadingComments = (isLoading) => ({
    type: SET_TYPE_LOADING_COMMENTS,
    payload: isLoading
});

export const updateComments = () => ({
    type: UPDATE_COMMENTS,
});

export const deleteUserCommentCreator = (id) => ({
    type: DELETE_USERS_COMMENTS,
    payload: id
});