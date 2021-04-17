import React, {useContext} from 'react';
import './AdminLogin.scss';
import {Form, Formik} from 'formik';
import {TextField} from '../../../Forms/Fields/TextField';
import {PasswordField} from '../../../Forms/Fields/PasswordField';
import {ButtonSubmit} from '../../../Forms/ButtonSubmit/ButtonSubmit';
import {VALIDATION_MES} from '../../../../constants/constants';
import * as Yup from 'yup';
import {Redirect, useHistory} from 'react-router-dom';
import {AuthContext} from '../../../../App';
import {useDispatch} from 'react-redux';
import {showAlert} from '../../../../redux/actionCreators';

const AdminLogin = () => {
    let contextAuth = useContext(AuthContext);
    let history = useHistory();
    let dispatch = useDispatch();

    if(contextAuth.isAdminAuth){
        return <Redirect to='/admin/services-manipulation'/>
    }

    let validationSchema = Yup.object().shape({
        email: Yup.string()
            .email(VALIDATION_MES.EMAIL_NOT_VALID)
            .required(VALIDATION_MES.REQUIRED),
        password: Yup.string().required(VALIDATION_MES.REQUIRED)
    })

    let onSubmitHandler = async (values, setSubmitting) => {
        try {
            setSubmitting(true);
            let res = await fetch('http://localhost:8081/auth/token', {
                method: 'POST',
                body: JSON.stringify({role: 'ADMIN', ...values}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (res.ok) {
                let data = await res.text();
                if (data) {
                    localStorage.setItem('admin-token', data);
                    localStorage.setItem('admin-email', values.email);
                    contextAuth.setIsAdminAuth(true);
                    history.replace('/admin/services-manipulation');
                }
                dispatch(showAlert(`Вход с ${values.email} (admin)`, 'good'));
            } else {
                dispatch(showAlert(`Проверьте введенные данные`, 'error'));
            }
        } catch (e) {
            dispatch(showAlert(`Что-то пошло не так. Неизвестная ошибка(`, 'error'));
        }
    }

    return (
        <div className='admin-login'>
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
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    );
};

export default AdminLogin;