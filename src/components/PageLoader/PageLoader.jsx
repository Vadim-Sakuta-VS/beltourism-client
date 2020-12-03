import React from 'react';
import "./PageLoader.scss";
import {useTransition, animated} from "react-spring";

export const PageLoader = ({isShowingPageLoader}) => {
    const transitions = useTransition(isShowingPageLoader, null, {
        from: {opacity: 0, transform: "scale(0, 0)"},
        enter: {opacity: 1, transform: "scale(1, 1)"},
        leave: {opacity: 0, transform: "scale(0, 0)"}
    })

    return (
        transitions.map(({item, key, props}) => {
            return item
                ? <animated.div key={key} className="page-loader" style={props}>
                    <div className="page-loader__container">
                        <div className="📦"/>
                        <div className="📦"/>
                        <div className="📦"/>
                        <div className="📦"/>
                        <div className="📦"/>
                    </div>
                  </animated.div>
                : null;
        })
    );
};
