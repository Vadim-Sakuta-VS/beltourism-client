import React from "react";
import "./Footer.scss";
import {useLocation} from "react-router-dom";

export const Footer = ({isShowingPageLoader}) => {
    let location = useLocation();

    if (location.pathname === "/page404") {
        return null;
    }

    return (
        <footer className="footer" style={isShowingPageLoader ? {top: "20vh"} : null}>
            <div className="container">
                <div className="footer__content">
                    <div className="social-links">
                        <a href="#" target="_blank" className="social-link">
                            <div className="link-content">
                                <i className="fab fa-vk"/>
                            </div>
                        </a>
                        <a href="#" target="_blank" className="social-link">
                            <div className="link-content">
                                <i className="fab fa-telegram-plane"/>
                            </div>
                        </a>
                        <a href="#" target="_blank" className="social-link">
                            <div className="link-content">
                                <i className="fab fa-google-plus-g"/>
                            </div>
                        </a>
                        <a href="#" target="_blank" className="social-link">
                            <div className="link-content">
                                <i className="fab fa-viber"/>
                            </div>
                        </a>
                    </div>
                    <div className="copyright-wrap">
                        <div className="footer__logo">
                            <span>bel</span>booking
                        </div>
                        <p className="copyright">Copyright &copy; 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}