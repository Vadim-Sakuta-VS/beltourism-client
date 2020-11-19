import React, {useState} from "react";
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

export const RegistrationForm = ({activeForm, setPopupInfo}) => {
    let [isPassReqVisible, setIsPassReqVisible] = useState(false);
    let [timerLeaveId, setTimerLeaveId] = useState(null);
    let [timerOverId, setTimerOverId] = useState(null);

    const onMouseOverHandler = () => {
        let timerId = setTimeout(() => {
            setIsPassReqVisible(true);
        }, 500);
        if (timerLeaveId) {
            clearTimeout(+timerLeaveId);
            setTimerLeaveId(null)
        }
        setTimerOverId(timerId);
    }

    const onMouseLeaveHandler = () => {
        console.log("leave")
        let timerId = setTimeout(() => {
            setIsPassReqVisible(false);
        }, 500);
        if (timerOverId) {
            clearTimeout(+timerOverId);
            setTimerOverId(null)
        }
        setTimerLeaveId(timerId);
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
        <FormWrap activeForm={activeForm} setPopupInfo={setPopupInfo}>
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
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
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
                                        <i
                                            className="far fa-question-circle pass-info"
                                            onMouseOver={onMouseOverHandler}
                                            onMouseLeave={onMouseLeaveHandler}
                                        />
                                        <PasswordRequirements
                                            isVisible={isPassReqVisible}
                                            isTimerLeave={!!timerLeaveId}
                                            onMouseOver={onMouseOverHandler}
                                            onMouseLeave={onMouseLeaveHandler}
                                        />
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