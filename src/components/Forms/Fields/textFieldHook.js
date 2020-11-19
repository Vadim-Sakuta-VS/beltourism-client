import {useField} from "formik";
import {useRef} from "react";

function useTextField(propsField) {
    let [field, meta] = useField(propsField);
    let refField = useRef();

    const onFocusHandler = () => {
        refField.current.classList.add("focused");
    }

    const onBlurHandler = (e) => {
        field.onBlur(e);
        refField.current.classList.remove("focused");
    }

    return {
        refField,
        meta,
        bind: {
            ...field,
            onFocus: onFocusHandler,
            onBlur: onBlurHandler
        }
    }
}

export {useTextField};