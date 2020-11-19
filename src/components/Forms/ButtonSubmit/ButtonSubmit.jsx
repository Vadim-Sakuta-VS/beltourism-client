import React from "react";
import "./ButtonSubmit.scss";

export const ButtonSubmit = ({isSubmitting, isValid, value}) => {
    return (
        <div className="form__btn-wrap">
            <button
                type="submit"
                className={`btn-submit ${isSubmitting || !isValid ? "not-valid" : ""}`}
                disabled={isSubmitting || !isValid}
            >
                {value}
            </button>
        </div>
    );
}