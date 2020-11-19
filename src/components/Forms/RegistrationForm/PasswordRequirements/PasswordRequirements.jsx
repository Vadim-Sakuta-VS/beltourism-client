import React from "react";
import "./PasswordRequirements.scss";
import {useSpring, animated} from "react-spring";

export const PasswordRequirements = ({isVisible, isTimerLeave, ...props}) => {
    console.log(isVisible)
    let styleProps = useSpring(
        isVisible ? {
            from: {opacity: 0, left: "120%", display: "none"},
            to: {opacity: 1, left: "110%", display: "block"},
        } : isTimerLeave ? {
            from: {opacity: 1, left: "110%", display: "block"},
            to: [{opacity: 0, left: "120%"}, {display: "none"}],
        } : {
            from: {opacity: 0, left: "120%", display: "block"},
            to: {opacity: 0, left: "120%", display: "none"},
        }
    )

    return (
        <animated.div
            className="password-requirements"
            style={styleProps}
            {...props}
        >
            <h6 className="password-requirements__title">
                Требования к паролю
            </h6>
            <p className="requirement">Не менее 8 символов</p>
            <p className="requirement">Не более 32 символов</p>
            <p className="requirement">Буква в нижнем регистре должна появляться как минимум 1 раз</p>
            <p className="requirement">Буква в верхнем регистре должна появляться как минимум 1 раз</p>
            <p className="requirement">Специальный символ (@#$%^&+=_) должен появляться как минимум 1 раз</p>
            <p className="requirement">Пробелы не разрешены</p>
        </animated.div>
    );
}