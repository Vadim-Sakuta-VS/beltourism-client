import React, {useEffect, useState} from 'react';
import "./ServiceAdding.scss";
import {Form, Formik, useFormikContext} from "formik";
import {ButtonSubmit} from "../../../Forms/ButtonSubmit/ButtonSubmit";
import {SelectField} from "../../../Forms/Fields/SelectField";
import {useDispatch} from "react-redux";
import {addTransportServiceAdmin} from "../../../../redux/actionCreators";
import {GeneralFields} from "./GeneralFields";
import {ButtonReset} from "../../../Forms/ButtonReset/ButtonReset";
import Pictures from './Pictures';
import OpeningHours from './OpeningHours';
import Location from './Location';
import ContactDetails from './ContactDetails';


function InitSubType({setCurrentSubtype}) {
    const {values} = useFormikContext();

    useEffect(() => {
        if (values.subType) {
            setCurrentSubtype(values.subType);
        }
    }, [values.subType, setCurrentSubtype]);

    return null;
}


export const TransportService = ({type, subTypes, initialValues, validationSchema}) => {
    let [currentSubtype, setCurrentSubtype] = useState("Выберите подтип");
    let dispatch = useDispatch();

    initialValues = {
        ...initialValues,
        leaseType: "Тип аренды",
        category: "Категория",
        pictureFiles: [],
        openingHours: [],
        location: null,
        contactDetails: {}
    };

    let categoryOptions = [{value: initialValues.category, text: initialValues.category}];
    if (currentSubtype === "car") {
        categoryOptions = [
            ...categoryOptions,
            {value: "Эконом-класс", text: "Эконом-класс"},
            {value: "Средний класс", text: "Средний класс"},
            {value: "Бизнес класс", text: "Бизнес класс"},
        ];
    } else if (currentSubtype === "moto") {
        categoryOptions = [
            ...categoryOptions,
            {value: "Чоппер", text: "Чоппер"},
            {value: "Спорт-турист", text: "Спорт-турист"},
            {value: "Спорт-байк", text: "Спорт-байк"},
        ];
    }

    let leaseTypeOptions = [
        {value: initialValues.leaseType, text: initialValues.leaseType},
        {value: "С водителем", text: "С водителем"},
        {value: "Без водителя", text: "Без водителя"},
    ];

    return (
        <div className="service-adding__form-wrap">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    dispatch(addTransportServiceAdmin(values, setSubmitting, resetForm))
                }}
            >
                {
                    ({isValid, isSubmitting, setFieldValue, values}) => {
                        return (
                            <Form className="service-adding__form">
                                <div className="fields-wrap">
                                    <GeneralFields type={type} subTypes={subTypes}/>
                                    <SelectField
                                        name="category"
                                        options={categoryOptions}
                                        style={{fontSize: "1rem"}}
                                    />
                                    <SelectField
                                        name="leaseType"
                                        options={leaseTypeOptions}
                                        style={{fontSize: "1rem"}}
                                    />
                                </div>
                                <InitSubType setCurrentSubtype={setCurrentSubtype}/>
                                <Pictures setFieldValue={setFieldValue} pictureFiles={values.pictureFiles}/>
                                <OpeningHours setFieldValue={setFieldValue} openingHours={values.openingHours}/>
                                <ContactDetails setFieldValue={setFieldValue} contactDetails={values.contactDetails}/>
                                <Location setFieldValue={setFieldValue} location={values.location}/>
                                <div className="btns">
                                    <ButtonReset
                                        value="Очистить форму"
                                        styleWrap={{padding: 0, flexBasis: "50%"}}
                                    />
                                    <ButtonSubmit
                                        value="Добавить"
                                        isSubmitting={isSubmitting}
                                        isValid={isValid}
                                        styleWrap={{padding: 0, flexBasis: "50%"}}
                                        styleBtn={{height: "100%"}}
                                    />
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    );
}