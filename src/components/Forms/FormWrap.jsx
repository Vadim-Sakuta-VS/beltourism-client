import React from "react";
import "./FormWrap.scss"
import {useSpring, animated} from "react-spring";

export const FormWrap = ({activeForm, setPopupInfo, children}) => {
    let props = useSpring(
        !!activeForm ? {
            from: {opacity: 0, top: "30%"},
            to: {opacity: 1, top: "50%"}

        } : {
            from: {opacity: 1, top: "50%"},
            to: {opacity: 0, top: "70%"}
        }
    )

    return (
        <animated.div className="form-wrap" style={props}>
            {children}
            <i
                className="fas fa-times btn-close"
                onClick={() => setPopupInfo({activeForm: "", fromFormClosed: activeForm})}
            />
        </animated.div>
    )
}