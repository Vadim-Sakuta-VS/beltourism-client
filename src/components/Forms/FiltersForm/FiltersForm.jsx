import React from 'react';
import "./FiltersForm.scss"
import {FormWrap} from "../FormWrap";
import {Form, Formik} from "formik";

const FiltersForm = ({activeForm, setPopupInfo}) => {
    return (
        <FormWrap activeForm={activeForm} setPopupInfo={setPopupInfo} classStyle="style-2">
            <Formik
                initialValues={
                    {
                        todo: ""
                    }
                }
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                {
                    () => {
                        return (
                            <Form className="form-filters">
                                <h2 className="form-filters__title">Фильтры</h2>
                            </Form>
                        )
                    }
                }
            </Formik>
        </FormWrap>
    );
};

export default FiltersForm;