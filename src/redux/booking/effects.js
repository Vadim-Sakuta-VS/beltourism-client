import {
    getHeadersObj,
    getUserToken,
    showAlert, showServiceAlertError,
} from '../actionCreators';
import {
    bookServiceUser,
} from '../../api/api';

export const bookService = (obj) => {
    return async (dispatch) => {
        try {
            const data = await bookServiceUser(obj, getHeadersObj(getUserToken()));
            console.log(data)
            // if (data.id) {
            //     dispatch(addComment({
            //         name: localStorage.getItem('user-name'),
            //         surname: localStorage.getItem('user-surname'),
            //         ...data
            //     }));
            //     return true;
            // }
            // dispatch(showServiceAlertError());
            // return false;
        } catch (e) {
            dispatch(showServiceAlertError());
            console.log(e);
        }
    }
}
