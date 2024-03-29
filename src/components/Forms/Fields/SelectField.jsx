import React from "react";
import "./SelectField.scss";
import {useField} from "formik";

export const SelectField = ({options, styleError, styleWrap, ...props}) => {
    let [field, meta] = useField(props);

    return (
        <div className="select-field" style={styleWrap}>
            <select
                {...props}
                {...field}
                className="select"
            >
                {
                    options.map(op => <option key={op.value} value={op.value}>{op.text}</option>)
                }
            </select>
            <div className="error" style={styleError}>
                {meta.error && meta.touched ? meta.error : null}
            </div>
        </div>
    )
}