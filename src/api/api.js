import {API_URL} from "../constants/constants";

const request = async (options) => {
    const headers = new Headers({
        "Content-Type": "application/json"
    });

    const defaults = {headers: headers};
    options = {...defaults, ...options};

    let res = await fetch(options.url, options);

    if (!res.ok) {
        throw new Error("Some Error");
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

    return params.length ? `?${params.join("&")}` : "";
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
        method: "GET"
    });
}

export function loadServices(pageNumber, pageSize, paramsStrArg) {
    let paramsStr = createGetParamsString(
        {
            pageNumber,
            pageSize,
        }
    );
    paramsStr = paramsStr.concat("&", paramsStrArg.slice(1));

    return request({
        url: API_URL.BASE + API_URL.SERVICES_SUBTYPE + paramsStr,
        method: "GET"
    });
}

export function addTransportService(obj){
    return request({
        url: API_URL.BASE + API_URL.ADD_TRANSPORT,
        method: "POST",
        body: JSON.stringify(obj)
    });
}

export function addAttractionService(obj){
    return request({
        url: API_URL.BASE + API_URL.ADD_ATTRACTION,
        method: "POST",
        body: JSON.stringify(obj)
    });
}

export function addHousingService(obj){
    return request({
        url: API_URL.BASE + API_URL.ADD_HOUSING,
        method: "POST",
        body: JSON.stringify(obj)
    });
}