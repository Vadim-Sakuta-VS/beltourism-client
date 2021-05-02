export const SET_BOOKMARKS_TYPE_LOADING = 'BOOKMARKS/SET_BOOKMARKS_TYPE_LOADING';
export const SET_BOOKMARKS_USER_DATA = 'BOOKMARKS/SET_BOOKMARKS_USER_DATA';
export const ADD_BOOKMARK = 'BOOKMARKS/ADD_COMMENT';
export const DELETE_BOOKMARK = 'BOOKMARKS/DELETE_BOOKMARK';
export const CLEAR_BOOKMARKS = 'BOOKMARKS/CLEAR_BOOKMARKS';

export const setBookmarksTypeLoading = (isLoading) => ({
    type: SET_BOOKMARKS_TYPE_LOADING,
    payload: isLoading
});

export const setBookmarksUserData = (bookmarks, services) => ({
    type: SET_BOOKMARKS_USER_DATA,
    payload: {bookmarks, services}
});


export const addBookmark = (bookmark, service) => ({
    type: ADD_BOOKMARK,
    payload: {bookmark, service}
});

export const deleteBookmark = (id) => ({
    type: DELETE_BOOKMARK,
    payload: id
});

export const clearBookmarks = () => ({
    type: CLEAR_BOOKMARKS,
});