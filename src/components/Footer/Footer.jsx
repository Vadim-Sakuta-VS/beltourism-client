import React from "react";
import "./Footer.scss";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="social-links">
                        <a href="#" target="_blank" className="social-link">
                            <div className="link-content">
                                <i className="fab fa-vk"></i>
                            </div>
                        </a>
                        <a href="#" target="_blank" className="social-link">
                            <div className="link-content">
                                <i className="fab fa-telegram-plane"></i>
                            </div>
                        </a>
                        <a href="#" target="_blank" className="social-link">
                            <div className="link-content">
                                <i className="fab fa-google-plus-g"></i>
                            </div>
                        </a>
                        <a href="#" target="_blank" className="social-link">
                            <div className="link-content">
                                <i className="fab fa-viber"></i>
                            </div>
                        </a>
                    </div>
                    <div className="copyright-wrap">
                        <div className="footer__logo">
                            <span>bel</span>booking
                        </div>
                        <p className="copyright">Copyright &copy; 2020</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}