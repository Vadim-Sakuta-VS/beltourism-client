import React, {useEffect} from 'react';
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
            to: {transform: "translateX(-20%)"}

        } : {
            from: {transform: "translateX(-30%)"},
            to: {transform: "translateX(110%)"},
        }
    )

    useEffect(() => {
        if (isShowing) {
            setTimeout(() => {
                dispatch(hideAlert());
            }, 3000);
        }
    }, [isShowing]);

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
