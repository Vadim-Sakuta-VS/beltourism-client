import React from "react";
import "./AuthSubInfo.scss";

export const AuthSubInfo = ({setPopupInfo, toForm, spanValue, subtext}) => {
    const onClickHandler = () => {
        setPopupInfo({
            activeForm: toForm,
            fromFormClosed: ""
        })
    }

    return (
        <div className="form__auth-sub-info">
            <span onClick={onClickHandler}>{spanValue}</span>{subtext}
        </div>
    );
}