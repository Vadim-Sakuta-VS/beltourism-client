import React from "react";
import "./Header.scss";
import {Navigation} from "./Navigation/Navigation";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
      <header className="header">
          <div className="container">
              <div className="header-content">
                  <NavLink to="/home" className="header__logo-wrap">booking</NavLink>
                  <div className="header__buttons">
                      <button className="btn btn-login">
                          <i className="fas fa-sign-in-alt"></i>
                          <span className="btn-login__text">Войти</span>
                      </button>
                      <button className="btn btn-signup">
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