import React from 'react';
import "./Page404.scss";

export const Page404 = ({history}) => {
    
    const onClickHandler=()=>{
        history.goBack();
    }

    return (
        <div className="page404">
            <h2 className="page404__title">Страница не найдена</h2>
            <h2 className="page404__subtitle">404</h2>
            <button
                className="btn btn-go-back"
                onClick={onClickHandler}
            >
                Вернуться назад
            </button>
        </div>
    );
};