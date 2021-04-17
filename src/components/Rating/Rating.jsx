import React from 'react';
import './Rating.scss'

export const Rating = ({rating, onClick, countStars}) => {
    const onClickHandler = (e) => {
        const rating = +e.target.dataset.value;
        rating && onClick && onClick(rating);
    }

    const starsElements = [];
    for (let i = 1; i <= countStars; i++) {
        starsElements.push(<i
            key={i}
            className={`far fa-star
            ${(rating && i <= rating) ? 'active' : ''}
            ${!onClick ? 'static' : ''}`}
            data-value={i}
            title={i}
        />);
    }

    return (
        <div className="rating" onClick={onClickHandler}>
            {starsElements}
        </div>
    )
}