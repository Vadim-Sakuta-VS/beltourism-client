import React from 'react';
import "./NameLink.scss"
import {NavLink} from "react-router-dom";

export const NameLink = ({to, value, classStyle}) => {
    return (
        <NavLink
            to={to}
            className={classStyle}
        >
            {value}
        </NavLink>
    );
};