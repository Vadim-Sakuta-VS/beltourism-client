import {
    getAdminToken,
    getHeadersObj,
    showAlert,
} from '../actionCreators';
import {
    deleteServiceAdmin,
    loadServicesByType,
} from '../../api/api';
import {
    deleteServiceCreator, resetServicesDeleting,
    setServicesDeleting,
} from './actions';
import {selectDeletingPageNumber, selectDeletingServices} from './selectors';

export const loadDeletingServicesByType = (obj) => {
    return async (dispatch, getState) => {
        try {
            let page = selectDeletingPageNumber(getState());
            const services = selectDeletingServices(getState());
            if ((!services.length && page) || (services[0] && services[0].service.type !== obj.type)) {
                dispatch(resetServicesDeleting());
            }
            page = selectDeletingPageNumber(getState());
            const loadedServices = await loadServicesByType(page, 20, obj.type);
            dispatch(setServicesDeleting(loadedServices))
        } catch (e) {
            console.log(e);
        }
    }
}

export const deleteService = (id, type) => {
    return async (dispatch) => {
        try {
            await deleteServiceAdmin(id, type, getHeadersObj(getAdminToken()));
            dispatch(deleteServiceCreator(id));
            dispatch(showAlert('Услуга удалена', 'good'));
        } catch (e) {
            console.log(e);
        }
    }
}
