import {getHeadersObj, getUserToken, showAlert, showServiceAlertError,} from '../actionCreators';
import {bookServiceUser, getCurrentUserBooking, loadServiceDetails,} from '../../api/api';
import {setTypeLoading} from './actions';
import {selectUserBookingServicesPage} from './selectors';

export const bookService = (obj) => {
    return async (dispatch) => {
        try {
            const data = await bookServiceUser(obj, getHeadersObj(getUserToken()));
            if (data.id) {
                dispatch(showAlert('Услуга забронирована', 'good'));
                window.location.replace('/user-booking');
                return true;
            }
            return false;
        } catch (e) {
            dispatch(showServiceAlertError());
            console.log(e);
        }
    }
}

export const loadUserBookServices = (actionCreator) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setTypeLoading(true));
            const page = selectUserBookingServicesPage(getState());
            let data = await getCurrentUserBooking(page, 10, getHeadersObj(getUserToken()));
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
            dispatch(setTypeLoading(false));
        }
    }
}
