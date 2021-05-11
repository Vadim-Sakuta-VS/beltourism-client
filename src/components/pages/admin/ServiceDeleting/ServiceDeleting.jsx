import React, {useEffect} from 'react';
import './ServiceDeleting.scss';
import {SERVICES, VALIDATION_MES} from '../../../../constants/constants';
import {Form, Formik} from 'formik';
import {SelectField} from '../../../Forms/Fields/SelectField';
import {ButtonSubmit} from '../../../Forms/ButtonSubmit/ButtonSubmit';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import {deleteService, loadDeletingServicesByType} from '../../../../redux/admin/effects';
import {selectDeletingPageNumber, selectDeletingServices} from '../../../../redux/admin/selectors';
import ServiceItem from '../../Services/ServiceItem/ServiceItem';
import {resetServicesDeleting} from '../../../../redux/admin/actions';

const ServiceDeleting = () => {
    const services = useSelector(selectDeletingServices);
    const page = useSelector(selectDeletingPageNumber);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetServicesDeleting());
    }, []);

    const commentsInitialValues = {
        type: '',
    };

    let validationSchema = Yup.object().shape({
        type: Yup.string()
            .oneOf(Object.keys(SERVICES), VALIDATION_MES.REQUIRED)
            .required(VALIDATION_MES.REQUIRED),
    })

    let serviceItemsElements = services.map(s => (
        <div key={s.service.id} className="service-item-wrapper">
            <div className="buttons">
                <div>
                    <i
                        className="far fa-trash-alt icon-delete-service"
                        onClick={() => dispatch(deleteService(s.service.id, s.service.type))}
                    />
                </div>
            </div>
            <ServiceItem service={s}/>
        </div>
    ));

    return (
        <section className="service-adding">
            <h2 className="services-manipulation__action-title">Удаление услуги</h2>
            <div className="service-adding__content">
                <Formik
                    initialValues={commentsInitialValues}
                    validationSchema={validationSchema}
                    onSubmit={async (values, {setSubmitting}) => {
                        let result = await dispatch(loadDeletingServicesByType(values));

                        if (result) {
                            setSubmitting(false);
                        }
                    }}
                >
                    {
                        ({isValid, isSubmitting}) => {

                            return (
                                <Form className="book__form">
                                    <SelectField
                                        name="type"
                                        options={[
                                            {value: 'Выберите тип услуги', text: 'Выберите тип услуги'},
                                            ...Object.keys(SERVICES).map(key => ({
                                                value: key, text: SERVICES[key].type
                                            }))
                                        ]}
                                        style={{fontSize: '1rem'}}
                                        styleError={{position: 'static'}}
                                        styleWrap={{position: 'sticky', top: 0, zIndex: 1}}
                                    />
                                    <div className="deleting-services" style={{marginTop: '3%', minHeight: 27}}>
                                        <div style={{maxWidth: 530}}>
                                            {
                                                !serviceItemsElements.length && page ?
                                                    <h2>Нет услуг</h2> : serviceItemsElements
                                            }
                                        </div>
                                    </div>
                                    <ButtonSubmit
                                        value={services.length ? 'Показать еще' : 'Показать'}
                                        isSubmitting={isSubmitting}
                                        isValid={isValid}
                                        styleWrap={{padding: 0, marginTop: '3%'}}
                                        styleBtn={{height: '100%'}}
                                    />
                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>
        </section>
    );
};

export default ServiceDeleting;