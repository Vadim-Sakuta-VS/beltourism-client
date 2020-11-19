import React, {useRef} from "react";
import "./PasswordField.scss"
import {useTextField} from "./textFieldHook";

export const PasswordField = (props) => {
    let {meta, refField, bind} = useTextField(props);
    let refInput = useRef();

    const onClickIconHandler = (e) => {
        if (e.target.classList.contains("fa-eye-slash")) {
            refInput.current.type = "text";
            e.target.classList.remove("fa-eye-slash");
            e.target.classList.add("fa-eye");
        }else{
            refInput.current.type = "password";
            e.target.classList.remove("fa-eye");
            e.target.classList.add("fa-eye-slash");
        }
    }

    return (
        <div ref={refField} className="text-field password-field">
            <input
                {...props}
                {...bind}
                ref={refInput}
                className="input"
                autoComplete="off"
            />
            <i className="far fa-eye-slash" onClick={onClickIconHandler}/>
            <div className="error">
                {meta.error && meta.touched ? meta.error : null}
            </div>
        </div>
    )
}