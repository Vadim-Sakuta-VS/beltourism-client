import {
    getHeadersObj,
    getUserToken,
    showAlert,
} from '../actionCreators';
import {
    addUserBookmark,
    deleteUserBookmark,
    getUserBookmarks,
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
                data.length && dispatch(setBookmarksUserData(data));
            }
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(setBookmarksTypeLoading(false));
        }
    }
}

export const addBookmarksForUser = (id) => {
    return async (dispatch) => {
        try {
            const data = await addUserBookmark(id, getHeadersObj(getUserToken()));
            if (data.id) {
                dispatch(addBookmark(data));
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
