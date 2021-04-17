    import React, {useContext} from "react";
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
    import {useHistory} from 'react-router-dom';
    import {useDispatch} from 'react-redux';
    import {showAlert} from '../../../redux/actionCreators';
    import {AuthContext} from '../../../App';

    export const LoginForm = ({activeForm, setPopupInfo}) => {
        let history = useHistory();
        let dispatch = useDispatch();
        let context = useContext(AuthContext);

        const onSubmitHandler = async (values, setSubmitting) => {
            try {
                setSubmitting(true);
                let res = await fetch('http://localhost:8081/auth/token', {
                    method: 'POST',
                    body: JSON.stringify({role: 'USER', ...values}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (res.ok) {
                    let data = await res.text();
                    console.log(data);
                    if (data) {
                        localStorage.setItem('user-token', data);
                        localStorage.setItem('user-email', values.email);
                        context.setIsUserAuth(true);
                        if(history.location.pathname==='/admin-login'){
                            history.replace('/home');
                        }
                    }
                    dispatch(showAlert(`Вход с ${values.email} (user)`, 'good'));
                    setPopupInfo({activeForm: '', fromFormClosed: activeForm});
                } else {
                    dispatch(showAlert(`Проверьте введенные данные.`, 'error'));
                }
            } catch (e) {
                console.log(e)
                dispatch(showAlert(`Что-то пошло не так. Неизвестная ошибка(`, 'error'));
            }
        }

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
                    onSubmit={(values, {setSubmitting}) => onSubmitHandler(values, setSubmitting)}
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