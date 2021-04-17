import React, {useContext, useState} from "react";
import "./Header.scss";
import {Navigation} from "./Navigation/Navigation";
import {NavLink} from "react-router-dom";
import {POPUPS_FORMS} from "../../constants/constants"
import {useLocation} from "react-router-dom"
import {AuthContext} from '../../App';
import {showAlert} from '../../redux/actionCreators';
import {useDispatch} from 'react-redux';
import {clearBookmarks} from '../../redux/bookmarks/actions';

export const Header = ({setPopupInfo}) => {
    let location = useLocation();
    let contextAuth = useContext(AuthContext);
    const [isVisibleUserMenu, setIsVisibleUserMenu] = useState(false);
    const dispatch = useDispatch();

    if (location.pathname === "/page404") {
        return null;
    }

    const onClickHandler = (form) => {
        setPopupInfo({activeForm: form, fromForm: ""});
    }

    const onUserMenuBtnClickHandler = () => {
        setIsVisibleUserMenu(!isVisibleUserMenu);
    }

    const onUserBtnOutClickHandler = () => {
        dispatch(showAlert(`Выход с ${localStorage.getItem('user-email')}`, 'good'));
        localStorage.removeItem('user-token');
        localStorage.removeItem('user-email');
        contextAuth.setIsUserAuth(false);
        setIsVisibleUserMenu(false);
        dispatch(clearBookmarks());
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <NavLink to="/home" className="header__logo-wrap"><span>bel</span>booking</NavLink>
                    {!contextAuth.isUserAuth
                        ? <div className="header__buttons">
                            <button
                                className="btn btn-login"
                                onClick={() => onClickHandler(POPUPS_FORMS.LOGIN)}
                            >
                                <i className="fas fa-sign-in-alt"/>
                                <span className="btn-login__text">Войти</span>
                            </button>
                            <button
                                className="btn btn-signup"
                                onClick={() => onClickHandler(POPUPS_FORMS.REGISTRATION)}
                            >
                                <i className="fas fa-user-plus"/>
                                <span className="btn-signup__text">Регистрация</span>
                            </button>
                        </div>
                        : <div className='user-info'>
                            <span className='user-info__email'>{localStorage.getItem('user-email')}</span>
                            <i
                                className="fas fa-chevron-down user-info__btn"
                                onClick={onUserMenuBtnClickHandler}
                            />
                            <ul className={`user-info__menu ${isVisibleUserMenu 
                                ? 'user-info__menu--visible': ''}`}>
                                <li className="user-info__menu-item">
                                    <NavLink className="user-info__menu-link" to='#'>Закладки</NavLink>
                                </li>
                                <li className="user-info__menu-item">
                                    <button
                                        className="user-info__menu-link"
                                        onClick={onUserBtnOutClickHandler}
                                    >
                                        Выйти
                                    </button>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
            <Navigation/>
        </header>
    );
}