export const SET_SERVICES_DELETING = 'ADMIN/SET_SERVICES_DELETING';
export const DELETE_SERVICE = 'ADMIN/DELETE_SERVICE';
export const RESET_SERVICES_DELETING = 'ADMIN/RESET_PAGE_NUMBER';

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
