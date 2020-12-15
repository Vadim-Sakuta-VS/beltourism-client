import React from 'react';
import "./Alert.scss"
import {useDispatch, useSelector} from "react-redux";
import {useSpring, animated} from "react-spring";
import {hideAlert} from "../../redux/actionCreators";

export const Alert = () => {
    const value = useSelector(state => state.app.alertValue);
    const isShowing = useSelector(state => state.app.isShowingAlert);
    const classStyle = useSelector(state => state.app.alertClassStyle);
    const dispatch = useDispatch();
    let props = useSpring(
        isShowing ? {
            from: {transform: "translateX(0)"},
            to: {transform: "translateX(-60%)"}

        } : {
            from: {transform: "translateX(-100%)"},
            to: {transform: "translateX(50%)"},
        }
    )

    return (
        <animated.div className={`alert ${classStyle}`} style={props}>
            <div className={`alert-border ${classStyle}`}>
                <span className="alert__value">{value}</span>
                <i
                    className="fas fa-times btn-hide-alert"
                    onClick={() => dispatch(hideAlert())}
                />
            </div>
        </animated.div>
    );
};
