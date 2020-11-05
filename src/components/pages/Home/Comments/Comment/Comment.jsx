import React from "react";
import "./Comment.scss";
import {NavLink} from "react-router-dom";

export const Comment = ({service_name, company_name, location, mark, text, user_ns, date}) => {
    return (
        <div className="comment-wrap">
            <div className="comment">
                <div className="comment__header">
                    <h4 className="service-name">{service_name}</h4>
                    <div className="service__detail">
                        <p className="company-name">{company_name},</p>
                        <div className="location">
                            <p className="location-value">{location}</p>
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                    </div>
                </div>
                <NavLink to="#" className="comment-link">
                    <div className="comment__body">
                        <div className="service-mark"></div>
                        <p className="comment-text">
                            {text}
                        </p>
                        <div className="comment-from">
                            <p className="user-ns">{user_ns}</p>
                            <p className="comment-date">{date}</p>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}