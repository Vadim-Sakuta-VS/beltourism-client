export const SET_USER_BOOKING_SERVICES = 'BOOKING/SET_USER_BOOKING_SERVICES';
export const SET_USER_BOOKING_SERVICES_MORE = 'BOOKING/SET_USER_BOOKING_SERVICES_MORE';
export const SET_TYPE_LOADING = 'BOOKING/SET_TYPE_LOADING';
export const UPDATE_BOOKINGS = 'BOOKING/UPDATE_BOOKINGS';

export const setUserBookingServices = (services) => ({
    type: SET_USER_BOOKING_SERVICES,
    payload: services
});

export const setUserBookingServicesMore = (services) => ({
    type: SET_USER_BOOKING_SERVICES_MORE,
    payload: services
});

export const setTypeLoading= (isLoading) => ({
    type: SET_TYPE_LOADING,
    payload: isLoading
});

export const updateBookings = () => ({
    type: UPDATE_BOOKINGS,
});