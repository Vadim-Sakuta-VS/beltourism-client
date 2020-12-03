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
    },
    "catering": {
        type: "Общепит",
        subtypes: {
            "restaurant": "Рестораны",
            "cafe": "Кафе",
            "bar": "Бары",
        }
    }
}

const API_URL = {
    BASE: "http://localhost:8081",
    STOCKS: "/stocks",
    SERVICES_TYPE: "/services/type",
    SERVICES_SUBTYPE: "/services/subType",
}

export {POPUPS_FORMS, VALIDATION_MES, REGEX, SERVICES, API_URL};