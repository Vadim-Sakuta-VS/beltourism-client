import React from 'react';
import './Comment.scss';
import {Link} from 'react-router-dom';
import {Location} from '../../../../Locations/Location/Location';
import {Rating} from '../../../../Rating/Rating';

export const Comment = ({comment}) => {
    return (
        <div className="comment-wrap">
            <div className="comment">
                <div className="comment__header-home">
                    <h4 className='service-name'><Link to={`/services/${comment.serviceType}/${comment.serviceId}`}
                              className="service-name-link">{comment.service?.name}</Link></h4>
                    {!!comment.location && (
                        <div className='location-wrapper'>
                            <Location
                                address={comment.location?.address}
                                city={comment.location?.name}
                                classStyle="style-comment"/>
                        </div>
                    )}
                </div>
                <div className="comment__body">
                    <Rating countStars={5} rating={comment.rating}/>
                    <div className="comment-text-wrap">
                        <p className="comment-text">
                            {comment.description}
                        </p>
                    </div>
                    <div className="comment-from">
                        <p className="user-ns">{comment.name} {comment.surname}</p>
                        <p className="comment-date">{new Date(comment.commentDate).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}