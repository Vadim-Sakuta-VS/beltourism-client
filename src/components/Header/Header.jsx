import React from "react";
import "./Header.scss";
import {Navigation} from "./Navigation/Navigation";
import {NavLink} from "react-router-dom";
import {POPUPS_FORMS} from "../../constants/constants"

export const Header = ({setPopupInfo}) => {
    const onClickHandler = (form) => {
        setPopupInfo({activeForm: form, fromForm: ""});
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <NavLink to="/home" className="header__logo-wrap"><span>bel</span>booking</NavLink>
                    <div className="header__buttons">
                        <button
                            className="btn btn-login"
                            onClick={() => onClickHandler(POPUPS_FORMS.LOGIN)}
                        >
                            <i className="fas fa-sign-in-alt"></i>
                            <span className="btn-login__text">Войти</span>
                        </button>
                        <button
                            className="btn btn-signup"
                            onClick={() => onClickHandler(POPUPS_FORMS.REGISTRATION)}
                        >
                            <i className="fas fa-user-plus"></i>
                            <span className="btn-signup__text">Регистрация</span>
                        </button>
                    </div>
                </div>
            </div>
            <Navigation/>
        </header>
    );
}