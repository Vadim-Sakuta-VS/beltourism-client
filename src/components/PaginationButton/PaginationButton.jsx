import React, {useState} from 'react';
import "./PaginationButton.scss";

const PaginationLoader = () => {
    return (
        <section className="loader">
            <div className="sk-circle-bounce">
                <div className="sk-child sk-circle-1"/>
                <div className="sk-child sk-circle-2"/>
                <div className="sk-child sk-circle-3"/>
                <div className="sk-child sk-circle-4"/>
                <div className="sk-child sk-circle-5"/>
                <div className="sk-child sk-circle-6"/>
                <div className="sk-child sk-circle-7"/>
                <div className="sk-child sk-circle-8"/>
                <div className="sk-child sk-circle-9"/>
                <div className="sk-child sk-circle-10"/>
                <div className="sk-child sk-circle-11"/>
                <div className="sk-child sk-circle-12"/>
            </div>
        </section>
    )
}

const PaginationButton = ({callback, classStyle}) => {
    let [isShowingLoader, setIsShowingLoader] = useState(false);

    const onClickHandler = () => {
        callback();
        setIsShowingLoader(true);
        setTimeout(() => setIsShowingLoader(false), 3000);
    }

    return (
        <div className="wrap-btn">
            <button
                className={`btn ${classStyle}`}
                onClick={onClickHandler}
            >
                {
                    isShowingLoader
                        ? <PaginationLoader/>
                        : <span className="btn-value">Показать еще</span>
                }
            </button>
        </div>
    );
};

export default PaginationButton;