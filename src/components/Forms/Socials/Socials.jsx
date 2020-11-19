import React from "react";
import "./Socials.scss";

export const Socials = () => {
    return (
        <div className="socials">
            <h3 className="socials__title">
                Войти с помощью сервисов
            </h3>
            <div className="socials__items">
                <div className="item">
                    <img src="https://img.icons8.com/color/452/google-logo.png" alt="social-1"/>
                </div>
                <div className="item">
                    <img src="https://image.flaticon.com/icons/png/512/25/25231.png"
                         alt="social-1"/>
                </div>
                <div className="item">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                        alt="social-1"/>
                </div>
            </div>
        </div>
    );
}