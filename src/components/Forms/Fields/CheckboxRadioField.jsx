import React from "react";
import "./CheckboxRadioField.scss";
import {useField} from "formik";

export const CheckboxRadioField = ({style, label, ...props}) => {
    let [field, meta] = useField(props);

    return (
        <div className="checkbox-radio-field" style={style}>
            <label className="label">
                <input {...field} {...props}/>
                <span>{label}</span>
            </label>
        </div>
    )
}