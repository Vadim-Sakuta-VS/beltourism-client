import {API_URL} from '../constants/constants';

const request = async (options) => {
    if (!options.headers) {
        options.headers = {
            'Content-Type': 'application/json'
        }
    }

    let res = await fetch(options.url, options);

    if (!res.ok) {
        throw new Error('Some Error');
    }

    return await res.json();
}

function createGetParamsString(paramsObj) {
    let params = [];

    for (const key in paramsObj) {
        if (paramsObj.hasOwnProperty(key) && paramsObj[key]) {

            if (Array.isArray(paramsObj[key])) {
                params.push(`${key}=${paramsObj[key].join()}`);
            } else {
                params.push(`${key}=${paramsObj[key]}`);
            }
        }
    }

    return params.length ? `?${params.join('&')}` : '';
}

export function loadStocks(pageNumber, pageSize, sortBy) {
    const paramsStr = createGetParamsString(
        {
            pageNumber,
            pageSize,
            sortBy
        }
    );

    return request({
        url: API_URL.BASE + API_URL.STOCKS_GET + paramsStr,
        method: 'GET'
    });
}

export function loadServicesByType(pageNumber, pageSize, type) {
    let paramsStr = createGetParamsString(
        {
            pageNumber,
            pageSize,
            type
        }
    );

    return request({
        url: API_URL.BASE + API_URL.SERVICES_TYPE + paramsStr,
        method: 'GET'
    });
}

export function loadServices(pageNumber, pageSize, paramsStrArg) {
    let paramsStr = createGetParamsString(
        {
            pageNumber,
            pageSize,
        }
    );
    paramsStr = paramsStr.concat('&', paramsStrArg.slice(1));

    return request({
        url: API_URL.BASE + API_URL.SERVICES_SUBTYPE + paramsStr,
        method: 'GET'
    });
}

export function addTransportService(obj, headers) {
    return request({
        url: API_URL.BASE + API_URL.ADD_TRANSPORT,
        method: 'POST',
        body: JSON.stringify(obj),
        headers
    });
}

export function saveServicePictures(obj, headers) {
    obj.files.forEach(async file => {
        let formData = new FormData();
        formData.append('file', file);
        await fetch(API_URL.BASE + API_URL.PICTURE_SAVE + `?serviceId=${obj.id}`, {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': headers['Authorization'],
            },
        })
    })
}

export function saveServiceOpeningHours(obj, headers) {
    obj.openingHours.forEach(async o => {
        o.serviceId = obj.id;
        await fetch(API_URL.BASE + API_URL.OPENING_HOURS_SAVE, {
            method: 'POST',
            body: JSON.stringify(o),
            headers
        })
    })
}

export async function saveServiceLocation(obj, headers) {
    await fetch(API_URL.BASE + API_URL.LOCATION_SAVE, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers
    })
}

export async function saveServiceContactDetails(obj, headers) {
    await fetch(API_URL.BASE + API_URL.CONTACT_DETAILS_SAVE, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers
    })
}

export function addAttractionService(obj, headers) {
    return request({
        url: API_URL.BASE + API_URL.ADD_ATTRACTION,
        method: 'POST',
        body: JSON.stringify(obj),
        headers
    });
}

export function addHousingService(obj, headers) {
    return request({
        url: API_URL.BASE + API_URL.ADD_HOUSING,
        method: 'POST',
        body: JSON.stringify(obj),
        headers
    });
}

export function loadServiceDetails(id, type) {
    const paramsStr = createGetParamsString(
        {
            id,
            type,
        }
    );

    return request({
        url: API_URL.BASE + API_URL.SERVICES_GET_BY_ID + paramsStr,
        method: 'GET'
    });
}

export function sendUserComment(obj, headers) {
    return request({
        url: API_URL.BASE + API_URL.COMMENT_ADD,
        method: 'POST',
        body: JSON.stringify(obj),
        headers
    });
}

export function getUserBookmarks(headers) {
    return request({
        url: API_URL.BASE + API_URL.BOOKMARKS_GET_FOR_CURRENT_USER,
        method: 'GET',
        headers
    });
}

export function addUserBookmark(id, type, headers) {
    const paramsStr = createGetParamsString(
        {
            type,
        }
    );
    return request({
        url: API_URL.BASE + API_URL.BOOKMARKS_ADD + `/${id}` + paramsStr,
        method: 'POST',
        headers
    });
}

export async function deleteUserBookmark(id, headers) {
    const paramsStr = createGetParamsString(
        {
            id,
        }
    );

    const res = await fetch(API_URL.BASE + API_URL.BOOKMARKS_DELETE + paramsStr, {
        method: 'DELETE',
        headers
    })
    return await res.text()
}

export function bookServiceUser(obj, headers) {
    return request({
        url: API_URL.BASE + API_URL.BOOKING_ADD,
        method: 'POST',
        body: JSON.stringify(obj),
        headers
    });
}

export async function deleteServiceAdmin(id, type, headers) {
    const paramsStr = createGetParamsString(
        {
            id,
            type
        }
    );
    await fetch(API_URL.BASE + API_URL.SERVICE_DELETE + paramsStr, {
        method: 'DELETE',
        headers
    })
}

export async function loadLastComments() {
    const paramsStr = createGetParamsString(
        {sortBy: 'commentDate'}
    );
    return request({
        url: API_URL.BASE + API_URL.COMMENT_GET_ALL + paramsStr,
        method: 'GET',
    });
}

export async function getCurrentUserBooking(page, pageSize, headers) {
    const paramsStr = createGetParamsString(
        {pageNumber: page, pageSize}
    );
    const res = await fetch(API_URL.BASE + API_URL.BOOKING_GET_FOR_CURRENT_USER + paramsStr, {
        headers
    })
    return await res.json();
}

export async function getAllUsersBooking(page, pageSize, headers) {
    const paramsStr = createGetParamsString(
        {pageNumber: page, pageSize}
    );
    const res = await fetch(API_URL.BASE + API_URL.BOOKING_GET_ALL + paramsStr, {
        headers
    })
    return await res.json();
}

export async function changeBookingStatus(bookingId, status, headers) {
    const paramsStr = createGetParamsString(
        {bookingId, status}
    );
    const res = await fetch(API_URL.BASE + API_URL.BOOKING_CHANGE_STATUS + paramsStr, {
        headers
    })
    return await res.json();
}

export async function deleteBooking(id, headers) {
    const paramsStr = createGetParamsString(
        {id}
    );
    const res = await fetch(API_URL.BASE + API_URL.BOOKING_DELETE + paramsStr, {
        method: 'DELETE',
        headers
    })
    return await res.text();
}