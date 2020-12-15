import React from "react";
import "./TextareaField.scss";
import {useTextField} from "./textFieldHook";

export const TextareaField = (props) => {
    let {meta, refField, bind} = useTextField(props);

    return (
        <div ref={refField} className="textarea-field">
            <textarea
                {...props}
                {...bind}
                className="textarea"
                autoComplete="off"
            />
            <div className="error">
                {meta.error && meta.touched ? meta.error : null}
            </div>
        </div>
    )
}