import React from "react";
import "./ButtonSubmit.scss";

export const ButtonSubmit = ({isSubmitting, isValid, value, styleWrap, styleBtn}) => {
    return (
        <div className="form__btn-wrap" style={styleWrap}>
            <button
                type="submit"
                className={`btn-submit ${isSubmitting || !isValid ? "not-valid" : ""}`}
                disabled={isSubmitting || !isValid}
                style={styleBtn}
            >
                {value}
            </button>
        </div>
    );
}