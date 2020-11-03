import React from "react";
import "./Dropdown.scss";
import {NavLink} from "react-router-dom";

export const Dropdown = ({type, type_icon, subtypes}) => {
    const subTypesElements = subtypes.map(s => (
        <li className="dropdown_item" key={s.subtype}>
            <NavLink
                className="menu__item-subtype"
                to={s.to}
            >
                {s.subtype}
            </NavLink>
        </li>
    ))

    return (
        <li className="dropdown">
            <div className="item">
                {type_icon}
                <span>{type}</span>
                <i className="fas fa-sort-down arrow-down"></i>
                <i className="fas fa-sort-up arrow-up"></i>
            </div>
            <ul className="dropdown_menu dropdown_menu--animated">
                {subTypesElements}
            </ul>
        </li>
    );
}