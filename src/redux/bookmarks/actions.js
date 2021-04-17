export const SET_BOOKMARKS_TYPE_LOADING = 'BOOKMARKS/SET_BOOKMARKS_TYPE_LOADING';
export const SET_BOOKMARKS_USER_DATA = 'BOOKMARKS/SET_BOOKMARKS_USER_DATA';
export const ADD_BOOKMARK = 'BOOKMARKS/ADD_COMMENT';
export const DELETE_BOOKMARK = 'BOOKMARKS/DELETE_BOOKMARK';
export const CLEAR_BOOKMARKS = 'BOOKMARKS/CLEAR_BOOKMARKS';

export const setBookmarksTypeLoading = (isLoading) => ({
    type: SET_BOOKMARKS_TYPE_LOADING,
    payload: isLoading
});

export const setBookmarksUserData = (data) => ({
    type: SET_BOOKMARKS_USER_DATA,
    payload: data
});


export const addBookmark = (id) => ({
    type: ADD_BOOKMARK,
    payload: id
});

export const deleteBookmark = (id) => ({
    type: DELETE_BOOKMARK,
    payload: id
});

export const clearBookmarks = () => ({
    type: CLEAR_BOOKMARKS,
});