import React from "react";
import "./FormWrap.scss"
import {useSpring, animated} from "react-spring";

export const FormWrap = ({activeForm, setPopupInfo, classStyle, children}) => {
    let animObj = classStyle === "style-1" ?
        !!activeForm ? {
            from: {opacity: 0, top: "30%"},
            to: {opacity: 1, top: "50%"}

        } : {
            from: {opacity: 1, top: "50%"},
            to: {opacity: 0, top: "70%"}
        }
        : !!activeForm ? {
            from: {opacity: 0, left: "100%"},
            to: {opacity: 1, left: "70%"}

        } : {
            from: {opacity: 1, left: "70%"},
            to: {opacity: 0, left: "100%"}
        }


    let props = useSpring(animObj);

    return (
        <animated.div className={`form-wrap ${classStyle}`} style={props}>
            {children}
            <i
                className="fas fa-times btn-close"
                onClick={() => setPopupInfo({activeForm: "", fromFormClosed: activeForm})}
            />
        </animated.div>
    )
}