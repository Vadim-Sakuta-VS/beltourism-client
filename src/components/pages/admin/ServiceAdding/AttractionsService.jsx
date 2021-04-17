import React from 'react';
import "./ServiceAdding.scss";
import {Form, Formik} from "formik";
import {ButtonSubmit} from "../../../Forms/ButtonSubmit/ButtonSubmit";
import {useDispatch} from "react-redux";
import {addAttractionServiceAdmin} from "../../../../redux/actionCreators";
import {GeneralFields} from "./GeneralFields";
import {ButtonReset} from "../../../Forms/ButtonReset/ButtonReset";
import Pictures from './Pictures';
import OpeningHours from './OpeningHours';
import ContactDetails from './ContactDetails';
import Location from './Location';


export const AttractionsService = ({type, subTypes, initialValues, validationSchema}) => {
    let dispatch = useDispatch();

    initialValues = {
        ...initialValues,
        pictureFiles: [],
        openingHours: [],
        location: null,
        contactDetails: {}
    };

    return (
        <div className="service-adding__form-wrap">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    dispatch(addAttractionServiceAdmin(values, setSubmitting, resetForm))
                }}
            >
                {
                    ({isValid, isSubmitting, values, setFieldValue}) => {
                        return (
                            <Form className="service-adding__form">
                                <div className="fields-wrap">
                                    <GeneralFields type={type} subTypes={subTypes}/>
                                </div>
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