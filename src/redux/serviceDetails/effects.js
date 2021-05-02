import {
    getHeadersObj,
    getUserToken,
    hidePageLoader,
    showPageLoader,
    showServiceAlertError
} from '../actionCreators';
import {loadServiceDetails, sendUserComment} from '../../api/api';
import {addComment, setServiceData} from './actions';

export const loadServiceData = (id, type) => {
    return async (dispatch) => {
        try {
            dispatch(showPageLoader());
            const data = await loadServiceDetails(id, type);
            console.log(data);
            if (!data.service.id) {
                window.location.replace('/page404');
                return;
            }
            dispatch(setServiceData(data));

        } catch (e) {
            // window.location.replace('/page404');
            console.log(e);
        } finally {
            dispatch(hidePageLoader());
        }
    }
}

export const sendComment = (obj) => {
    return async (dispatch) => {
        try {
            const data = await sendUserComment(obj, getHeadersObj(getUserToken()));
            if (data.id) {
                dispatch(addComment({
                    name: localStorage.getItem('user-name'),
                    surname: localStorage.getItem('user-surname'),
                    ...data
                }));
                return true;
            }
            dispatch(showServiceAlertError());
            return false;
        } catch (e) {
            dispatch(showServiceAlertError());
            console.log(e);
        }
    }
}