import React from 'react';
import "./ServiceAdding.scss";
import {Form, Formik} from "formik";
import {ButtonSubmit} from "../../../Forms/ButtonSubmit/ButtonSubmit";
import {useDispatch} from "react-redux";
import {addAttractionServiceAdmin} from "../../../../redux/actionCreators";
import {GeneralFields} from "./GeneralFields";
import {ButtonReset} from "../../../Forms/ButtonReset/ButtonReset";


export const AttractionsService = ({type, subTypes, initialValues, validationSchema}) => {
    let dispatch = useDispatch();

    return (
        <div className="service-adding__form-wrap">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    for (const key in values) {
                        if (key !== "type" && key !== "isBooked" && key !== "isActive"
                            && values[key] === initialValues[key]) {
                            delete values[key];
                        }
                    }
                    dispatch(addAttractionServiceAdmin(values, setSubmitting, resetForm))
                }}
            >
                {
                    ({isValid, isSubmitting}) => {
                        return (
                            <Form className="service-adding__form">
                                <div className="fields-wrap">
                                    <GeneralFields type={type} subTypes={subTypes}/>
                                </div>
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