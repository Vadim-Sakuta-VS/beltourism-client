import React from 'react';
import './Comments.scss';
import {Rating} from '../Rating/Rating';

export const Comment = ({name, surname, description, rating, commentDate}) => {
    return (
        <article className="comment">
            <header className="comment__header">
                <p className="comment__user">
                    {name} {surname}
                </p>
                {!!rating && <Rating rating={rating} countStars={5}/>}
            </header>
            <div className="comment__body">
                <p className="comment__description">{description}</p>
                <p className="comment__date">{commentDate}</p>
            </div>
        </article>
    );
};