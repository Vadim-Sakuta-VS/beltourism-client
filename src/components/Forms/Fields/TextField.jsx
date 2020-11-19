import React from "react";
import "./TextField.scss";
import {useTextField} from "./textFieldHook";

export const TextField = (props) => {
    let {meta, refField, bind} = useTextField(props);

    return (
        <div ref={refField} className="text-field">
            <input
                {...props}
                {...bind}
                className="input"
                autoComplete="off"
            />
            <div className="error">
                {meta.error && meta.touched ? meta.error : null}
            </div>
        </div>
    )
}