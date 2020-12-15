import React from 'react';
import "./ServiceAdding.scss";
import {SelectField} from "../../../Forms/Fields/SelectField";
import {TextField} from "../../../Forms/Fields/TextField";
import {FieldArray, Form, Formik} from "formik";
import {addHousingServiceAdmin} from "../../../../redux/actionCreators";
import {GeneralFields} from "./GeneralFields";
import {ButtonReset} from "../../../Forms/ButtonReset/ButtonReset";
import {ButtonSubmit} from "../../../Forms/ButtonSubmit/ButtonSubmit";
import {useDispatch} from "react-redux";

const FacilityItem = ({nameFieldFacility, nameFieldExtraPrice, remove}) => {
    return (
        <div className="facility-item">
            <div className="col-1">
                <TextField
                    name={nameFieldFacility}
                    type="text"
                    placeholder="Название"
                    required
                    style={{fontSize: "1rem", marginTop: "1%"}}
                />
            </div>
            <div className="col-2">
                <TextField
                    name={nameFieldExtraPrice}
                    type="number"
                    placeholder="Дополнительная стоимость"
                    min={0}
                    required
                    style={{fontSize: "1rem", marginTop: "1%"}}
                />
            </div>
            <div className="col-3">
                <i
                    className="far fa-minus-square btn-facility"
                    onClick={() => remove()}
                />
            </div>
        </div>
    )
}


export const HousingService = ({type, subTypes, initialValues, validationSchema}) => {
    let dispatch = useDispatch();

    console.log(validationSchema)

    initialValues = {
        ...initialValues,
        stars: "",
        center_distance: "",
        category: "",
        facilities: []
    }


    return (
        <div className="service-adding__form-wrap">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    for (const key in values) {
                        if ((key !== "facilities" && key !== "type" && key !== "isBooked" && key !== "isActive"
                            && values[key] === initialValues[key])) {
                            delete values[key];
                        }
                    }
                    dispatch(addHousingServiceAdmin(values, setSubmitting, resetForm))
                }}
            >
                {
                    ({isValid, isSubmitting, values}) => {

                        return (
                            <Form className="service-adding__form">
                                <div className="fields-wrap">
                                    <GeneralFields type={type} subTypes={subTypes}/>
                                    <SelectField
                                        name="stars"
                                        options={[
                                            {value: "Количество звезд", text: "Количество звезд"},
                                            {value: "1", text: "1"},
                                            {value: "2", text: "2"},
                                            {value: "3", text: "3"},
                                            {value: "4", text: "4"},
                                            {value: "5", text: "5"},
                                        ]}
                                        style={{fontSize: "1rem"}}
                                    />
                                    <TextField
                                        name="center_distance"
                                        type="number"
                                        placeholder="Расстояние от центра (м)"
                                        min={0}
                                        style={{fontSize: "1rem", marginTop: "1%"}}
                                    />
                                    <SelectField
                                        name="category"
                                        options={[
                                            {value: "Категория", text: "Категория"},
                                            {value: "Одноместное", text: "Одноместное"},
                                            {value: "Двухместное", text: "Двухместное"},
                                            {value: "Трехместное", text: "Трехместное"},
                                        ]}
                                        style={{fontSize: "1rem"}}
                                    />
                                    <FieldArray name="facilities">
                                        {
                                            ({push, remove}) => (
                                                <div className="facilities">
                                                    <h2 className="facilities__title">
                                                        <span>Удобства</span>
                                                        <i
                                                            className="far fa-plus-square btn-facility btn-add-facility"
                                                            onClick={() => push({
                                                                facilityName: "",
                                                                extraPrice: ""
                                                            })}
                                                        />
                                                    </h2>
                                                    <div className="facilities__items">
                                                        {
                                                            values.facilities && values.facilities.length ?
                                                            values.facilities.map((f, i) => (
                                                                <FacilityItem
                                                                    key={i}
                                                                    nameFieldFacility={`facilities.${i}.facilityName`}
                                                                    nameFieldExtraPrice={`facilities.${i}.extraPrice`}
                                                                    remove={() => remove(i)}
                                                                />
                                                            )): null
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </FieldArray>
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
};