import React from "react";
import "./Slide.scss";

export const Slide=({bg_url, text})=>{
    return (
        <div className="slide">
            <div
                className="slide-bg"
                style={
                    {
                        background: `url(${bg_url}) no-repeat center center`,
                        backgroundSize: "cover"
                    }
                }
            >
                <h3 className="slide-text">{text}</h3>
            </div>
        </div>
    );
}