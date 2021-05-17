import {
    getAdminToken,
    getHeadersObj,
    showAlert, showServiceAlertError,
} from '../actionCreators';
import {
    changeBookingStatus, deleteBooking, deleteComment,
    deleteServiceAdmin, getAllUsersBooking, loadAllComments, loadServiceDetails,
    loadServicesByType,
} from '../../api/api';
import {
    changeStatusUsersBooking,
    deleteServiceCreator, deleteUserCommentCreator, deleteUsersBooking, resetServicesDeleting,
    setServicesDeleting, setTypeLoadingBooking, setTypeLoadingComments,
} from './actions';
import {
    selectDeletingPageNumber,
    selectDeletingServices,
    selectUsersBookingServicesPage,
    selectUsersCommentsServicesPage
} from './selectors';

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
            dispatch(showServiceAlertError());
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
            dispatch(showServiceAlertError());
        }
    }
}

export const loadUsersBookServices = (actionCreator) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setTypeLoadingBooking(true));
            const page = selectUsersBookingServicesPage(getState());
            let data = await getAllUsersBooking(page, 10, getHeadersObj(getAdminToken()));
            if (data.length) {
                for (const b of data) {
                    b.service = await loadServiceDetails(b.serviceId, b.serviceType);
                }
                dispatch(actionCreator(data));
            }
        } catch (e) {
            dispatch(showServiceAlertError());
            console.log(e);
        } finally {
            dispatch(setTypeLoadingBooking(false));
        }
    }
}

export const changeStatusEffect = (bookingId, status)=>{
    return async (dispatch) => {
        try {
            const res = await changeBookingStatus(bookingId, status, getHeadersObj(getAdminToken()));
            if(res.id){
                dispatch(changeStatusUsersBooking(bookingId, status));
            }
        }catch (e) {
            dispatch(showServiceAlertError());
            console.log(e);
        }
    }
}

export const deleteBookingEffect = (bookingId)=>{
    return async (dispatch) => {
        try {
            await deleteBooking(bookingId, getHeadersObj(getAdminToken()));
            dispatch(deleteUsersBooking(bookingId));
        }catch (e) {
            dispatch(showServiceAlertError());
            console.log(e);
        }
    }
}

export const loadUsersCommentsServices = (actionCreator) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setTypeLoadingComments(true));
            const page = selectUsersCommentsServicesPage(getState());
            let data = await loadAllComments({pageNumber: page, pageSize: 20});
            if (data.length) {
                dispatch(actionCreator(data));
            }
        } catch (e) {
            dispatch(showServiceAlertError());
            console.log(e);
        } finally {
            dispatch(setTypeLoadingComments(false));
        }
    }
}

export const deleteCommentEffect = (commentId)=>{
    return async (dispatch) => {
        try {
            await deleteComment(commentId, getHeadersObj(getAdminToken()));
            dispatch(deleteUserCommentCreator(commentId));
        }catch (e) {
            dispatch(showServiceAlertError());
            console.log(e);
        }
    }
}