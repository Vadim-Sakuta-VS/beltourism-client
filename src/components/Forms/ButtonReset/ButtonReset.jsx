import React from "react";
import "./ButtonReset.scss";

export const ButtonReset = ({value, styleWrap, styleBtn}) => {
    return (
        <div className="form__btn-wrap" style={styleWrap}>
            <button
                type="reset"
                className="btn-reset"
                style={styleBtn}
            >
                {value}
            </button>
        </div>
    );
}