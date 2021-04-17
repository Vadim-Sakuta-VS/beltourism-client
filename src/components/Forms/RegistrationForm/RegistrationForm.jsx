import React from 'react';
import "./RegistrationForm.scss";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {FormWrap} from "../FormWrap";
import {TextField} from "../Fields/TextField";
import {PasswordField} from "../Fields/PasswordField";
import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit";
import {Socials} from "../Socials/Socials";
import {AuthSubInfo} from "../AuthSubInfo/AuthSubInfo";
import {PasswordRequirements} from "./PasswordRequirements/PasswordRequirements";
import {POPUPS_FORMS, REGEX, VALIDATION_MES} from "../../../constants/constants";
import {showAlert} from '../../../redux/actionCreators';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

export const RegistrationForm = ({activeForm, setPopupInfo}) => {
    let history = useHistory();
    let dispatch = useDispatch();

    const onSubmitHandler = async (values, setSubmitting) => {
        try {
            console.log('register')
            setSubmitting(true);
            let res = await fetch('http://localhost:8081/register', {
                method: 'POST',
                body: JSON.stringify({role: 'USER', ...values}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (res.ok) {
                let data = await res.text();
                if (data && history.location.pathname==='/admin-login') {
                    history.replace('/home');
                }
                dispatch(showAlert(`Аккаунт ${values.email} создан. Пройдите авторизацию.`, 'good'));
                setPopupInfo({activeForm: POPUPS_FORMS.LOGIN, fromFormClosed: activeForm});
            } else {
                dispatch(showAlert(`Проверьте введенные данные. Возможно данный email занят.`, 'error'));
            }
        } catch (e) {
            console.log(e)
            dispatch(showAlert(`Что-то пошло не так. Неизвестная ошибка(`, 'error'));
        }
    }

    let validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, VALIDATION_MES.NS.MIN_LENGTH)
            .max(20, VALIDATION_MES.NS.MAX_LENGTH)
            .required(VALIDATION_MES.REQUIRED),
        surname: Yup.string()
            .min(2, VALIDATION_MES.NS.MIN_LENGTH)
            .max(20, VALIDATION_MES.NS.MAX_LENGTH)
            .required(VALIDATION_MES.REQUIRED),
        email: Yup.string()
            .email(VALIDATION_MES.EMAIL_NOT_VALID)
            .required(VALIDATION_MES.REQUIRED),
        password: Yup.string()
            .min(8, VALIDATION_MES.PASSWORD.MIN_LENGTH)
            .max(32, VALIDATION_MES.PASSWORD.MAX_LENGTH)
            .matches(REGEX.PASSWORD, VALIDATION_MES.PASSWORD.NOT_VALID)
            .required(VALIDATION_MES.REQUIRED),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], VALIDATION_MES.PASSWORD.NOT_MATCH)
            .required(VALIDATION_MES.REQUIRED)

    });

    return (
        <FormWrap activeForm={activeForm} setPopupInfo={setPopupInfo} classStyle="style-1">
            <Formik
                initialValues={
                    {
                        name: '',
                        surname: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }
                }
                validationSchema={validationSchema}
                validateOnChange={false}
                validateOnMount={true}
                onSubmit={(values, {setSubmitting})=>onSubmitHandler(values, setSubmitting)}
            >
                {
                    ({isSubmitting, isValid}) => {
                        return (
                            <Form className="form-auth">
                                <h2 className="form-auth__title">Регистрация</h2>
                                <div className="form-auth__fields-wrap">
                                    <TextField name="name" type="text" placeholder="Имя"/>
                                    <TextField name="surname" type="text" placeholder="Фамилия"/>
                                    <TextField name="email" type="email" placeholder="Email"/>
                                    <div className="password-field-wrap">
                                        <PasswordField name="password" type="password" placeholder="Пароль"/>
                                        <i className="far fa-question-circle pass-info"/>
                                        <PasswordRequirements/>
                                    </div>
                                    <PasswordField name="confirmPassword" type="password"
                                                   placeholder="Потвердите пароль"/>
                                </div>
                                <ButtonSubmit
                                    isSubmitting={isSubmitting}
                                    isValid={isValid}
                                    value="Создать профиль"
                                />
                                <Socials/>
                                <AuthSubInfo
                                    setPopupInfo={setPopupInfo}
                                    toForm={POPUPS_FORMS.LOGIN}
                                    spanValue="Вход"
                                    subtext=" для тех, кто уже зарегистрирован"
                                />
                            </Form>
                        )
                    }
                }
            </Formik>
        </FormWrap>
    );
}