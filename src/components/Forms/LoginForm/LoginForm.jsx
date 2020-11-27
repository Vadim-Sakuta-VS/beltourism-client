import React from "react";
import "../FormAuth.scss";
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import {FormWrap} from "../FormWrap";
import {TextField} from "../Fields/TextField";
import {PasswordField} from "../Fields/PasswordField";
import {Socials} from "../Socials/Socials";
import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit";
import {AuthSubInfo} from "../AuthSubInfo/AuthSubInfo";
import {POPUPS_FORMS, VALIDATION_MES} from "../../../constants/constants";

export const LoginForm = ({activeForm, setPopupInfo}) => {
    let validationSchema = Yup.object().shape({
        email: Yup.string()
            .email(VALIDATION_MES.EMAIL_NOT_VALID)
            .required(VALIDATION_MES.REQUIRED),
        password: Yup.string().required(VALIDATION_MES.REQUIRED)
    })

    return (
        <FormWrap activeForm={activeForm} setPopupInfo={setPopupInfo} classStyle="style-1">
            <Formik
                initialValues={
                    {
                        email: '',
                        password: ''
                    }
                }
                validationSchema={validationSchema}
                validateOnMount={true}
                validateOnChange={false}
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
                                <h2 className="form-auth__title">Вход</h2>
                                <div className="form-auth__fields-wrap">
                                    <TextField name="email" type="email" placeholder="Email"/>
                                    <PasswordField name="password" type="password" placeholder="Пароль"/>
                                </div>
                                <ButtonSubmit
                                    isSubmitting={isSubmitting}
                                    isValid={isValid}
                                    value="Войти"
                                />
                                <Socials/>
                                <AuthSubInfo
                                    setPopupInfo={setPopupInfo}
                                    toForm={POPUPS_FORMS.REGISTRATION}
                                    spanValue="Регистрация"
                                    subtext=" для тех, кто первый раз на сайте"
                                />
                            </Form>
                        )
                    }
                }
            </Formik>
        </FormWrap>
    );
}