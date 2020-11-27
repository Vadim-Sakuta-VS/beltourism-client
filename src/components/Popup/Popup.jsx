import React, {useState} from "react";
import "./Popup.scss";
import {useTransition, animated} from "react-spring";
import {LoginForm} from "../Forms/LoginForm/LoginForm";
import {RegistrationForm} from "../Forms/RegistrationForm/RegistrationForm";
import {POPUPS_FORMS} from "../../constants/constants";
import FiltersForm from "../Forms/FiltersForm/FiltersForm";

export const Popup = ({popupInfo, setPopupInfo}) => {
    let {activeForm, fromFormClosed} = popupInfo;
    let [isMouseDown, setIsMouseDown] = useState(false);
    let [isMouseUp, setIsMouseUp] = useState(false);
    let transitions = useTransition(!!activeForm, null, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
    })

    const onMouseDownHandler = (e) => {
        e.target.className === "popup" ? setIsMouseDown(true) : setIsMouseDown(false);
    }

    const onMouseUpHandler = (e) => {
        e.target.className === "popup" ? setIsMouseUp(true) : setIsMouseUp(false);
    }

    const onClickHandler = (e) => {
        e.target.className === "popup"
        && isMouseDown && isMouseUp &&
        setPopupInfo({activeForm: "", fromFormClosed: activeForm});
    }

    let formComponent;
    if (activeForm === POPUPS_FORMS.LOGIN || fromFormClosed === POPUPS_FORMS.LOGIN) {
        formComponent = <LoginForm
            {...popupInfo}
            setPopupInfo={setPopupInfo}
        />
    }else if(activeForm === POPUPS_FORMS.REGISTRATION || fromFormClosed === POPUPS_FORMS.REGISTRATION){
        formComponent = <RegistrationForm
            {...popupInfo}
            setPopupInfo={setPopupInfo}
        />
    }else if(activeForm === POPUPS_FORMS.FILTERS || fromFormClosed === POPUPS_FORMS.FILTERS){
        formComponent = <FiltersForm
            {...popupInfo}
            setPopupInfo={setPopupInfo}
        />
    }

    return (
        transitions.map(({item, key, props}) => {
            return item
                ? <animated.section
                    key={key}
                    className="popup"
                    onMouseDown={onMouseDownHandler}
                    onMouseUp={onMouseUpHandler}
                    onClick={onClickHandler}
                    style={props}
                >
                    {formComponent}
                </animated.section>
                : null;
        })
    );
}