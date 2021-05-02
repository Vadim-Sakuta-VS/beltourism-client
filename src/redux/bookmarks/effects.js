import {
    getHeadersObj,
    getUserToken,
    showAlert,
} from '../actionCreators';
import {
    addUserBookmark,
    deleteUserBookmark,
    getUserBookmarks, loadServiceDetails,
} from '../../api/api';
import {
    addBookmark,
    deleteBookmark,
    setBookmarksTypeLoading,
    setBookmarksUserData,
} from './actions';
import {selectUserBookmarks} from './selectors';

export const getBookmarksForUser = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setBookmarksTypeLoading(true));
            const bookmarks = selectUserBookmarks(getState());
            if (!bookmarks.length) {
                const data = await getUserBookmarks(getHeadersObj(getUserToken()));
                console.log(data)
                const services = [];
                for (const b of data) {
                    const service = await loadServiceDetails(b.serviceId, b.serviceType);
                    services.push(service);
                }
                services.length && dispatch(setBookmarksUserData(data, services));
            }
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(setBookmarksTypeLoading(false));
        }
    }
}

export const addBookmarksForUser = (id, type) => {
    return async (dispatch) => {
        try {
            const data = await addUserBookmark(id, type, getHeadersObj(getUserToken()));
            if (data.id) {
                const service = await loadServiceDetails(data.serviceId, data.serviceType);
                dispatch(addBookmark(data, service));
                dispatch(showAlert('Добавлено в избранное', 'good'));
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export const deleteBookmarksForUser = (id) => {
    return async (dispatch) => {
        try {
            await deleteUserBookmark(id, getHeadersObj(getUserToken()));
            dispatch(deleteBookmark(id));
            dispatch(showAlert('Удалено из избранного', 'good'));
        } catch (e) {
            console.log(e);
        }
    }
}
