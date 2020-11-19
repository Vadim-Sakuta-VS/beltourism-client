const POPUPS_FORMS = {
    LOGIN: "LOGIN",
    REGISTRATION: "REGISTRATION"
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

export {POPUPS_FORMS, VALIDATION_MES, REGEX};