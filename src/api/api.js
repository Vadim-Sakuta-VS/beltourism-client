import {API_URL} from '../constants/constants';

const request = async (options) => {
    if (!options.headers) {
        options.headers = {
            'Content-Type': 'application/json'
        }
    }

    let res = await fetch(options.url, options);
    console.log(res)

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
    console.log(headers)
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

export function addUserBookmark(id, headers) {
    return request({
        url: API_URL.BASE + API_URL.BOOKMARKS_ADD + `/${id}`,
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
    const text = await res.text()
    console.log(text)
}