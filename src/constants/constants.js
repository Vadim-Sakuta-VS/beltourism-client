const POPUPS_FORMS = {
    LOGIN: "LOGIN",
    REGISTRATION: "REGISTRATION",
    FILTERS: "FILTERS"
}

const VALIDATION_MES = {
    NS: {
        MIN_LENGTH: "Минимальная длина - 2 символа",
        MAX_LENGTH: "Максимальная длина - 20 символов",
    },
    EMAIL_NOT_VALID: "Не валидный email",
    PASSWORD: {
        MIN_LENGTH: "Пароль не должен быть короче 8 символов",
        MAX_LENGTH: "Пароль не должен быть длинее 32 символов",
        NOT_VALID: "Не валидный пароль",
        NOT_MATCH: "Пароли не совпадают"
    },
    SERVICE: {
        MIN_LENGTH: "Минимальная длина - 2 символа",
        PRICE: {
            MIN_VALUE: "Минимальная стоимость - 0руб"
        }
    },
    REQUIRED: "Обязательное поле"
}

const REGEX = {
    PASSWORD: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=_])(?=\S+$).{8,32}$/
}

const SERVICES = {
    "housing": {
        type: "Жилье",
        subtypes: {
            "hotel": "Отели",
            "flat": "Кваритры",
            "country-houses": "Загородные дома"
        }
    },
    "transport": {
        type: "Транспорт",
        subtypes: {
            "car": "Авто",
            "moto": "Мото",
        }
    },
    "tourism": {
        type: "Туризм",
        subtypes: {
            "bus-excursions": "Автобусные экскурсионные туры по городам",
            "individual-excursions": "Индивидуальные туры по Беларуси",
            "bike-excursions": "Велоэкскурсии по городам Беларуси",
            "agrotourism": "Агротуризм",
        }
    },
    "attractions": {
        type: "Достопримечательности",
        subtypes: {
            "culture": "Культурные объекты",
            "religion": "Религиозные объекты",
            "architecture": "Архитектурные объекты",
            "entertainment": "Развлекательные объекты",
        }
    }
}

const API_URL = {
    BASE: "http://localhost:8081",
    STOCKS_GET: "/stocks/get",
    SERVICES_TYPE: "/services/type",
    SERVICES_SUBTYPE: "/services/subType",
    SERVICES_GET_BY_ID: "/services/getById",
    ADD_TRANSPORT: "/transport/add",
    ADD_ATTRACTION: "/attractions/add",
    ADD_HOUSING: "/housing/add",
    PICTURE_SAVE: '/picture/save',
    LOCATION_SAVE: '/locations/save',
    OPENING_HOURS_SAVE: '/openingHours/save',
    CONTACT_DETAILS_SAVE: '/contactDetails/save',
    COMMENT_ADD: '/comment/add',
    BOOKMARKS_GET_FOR_CURRENT_USER: '/bookmark/getForCurrentUser',
    BOOKMARKS_ADD: '/bookmark/add',
    BOOKMARKS_DELETE: '/bookmark/delete',
}

const DAYS = {
    'MONDAY': {
        valueRu: 'Понедельник',
        number: 1
    },
    'TUESDAY': {
        valueRu: 'Вторник',
        number: 2
    },
    'WEDNESDAY': {
        valueRu: 'Среда',
        number: 3
    },
    'THURSDAY': {
        valueRu: 'Четверг',
        number: 4
    },
    'FRIDAY': {
        valueRu: 'Пятница',
        number: 5
    },
    'SATURDAY': {
        valueRu: 'Суббота',
        number: 6
    },
    'SUNDAY': {
        valueRu: 'Воскресенье',
        number: 0
    },
}

export {POPUPS_FORMS, VALIDATION_MES, REGEX, SERVICES, API_URL, DAYS};