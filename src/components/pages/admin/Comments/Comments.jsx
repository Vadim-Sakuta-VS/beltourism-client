import React, {useEffect} from 'react';
import './Comments.scss';
import {
    deleteCommentEffect,
    loadUsersCommentsServices
} from '../../../../redux/admin/effects';
import {useDispatch, useSelector} from 'react-redux';
import {
    selectUsersCommentsServicesData, selectUsersCommentsServicesLoading
} from '../../../../redux/admin/selectors';
import {
    setUsersCommentsServices, setUsersCommentsServicesMore,
    updateComments
} from '../../../../redux/admin/actions';
import PaginationButton from '../../../PaginationButton/PaginationButton';
import {Link} from 'react-router-dom';
import {Comment} from '../../../Comments/Comment';

const Comments = () => {
    const comments = useSelector(selectUsersCommentsServicesData);
    const isLoading = useSelector(selectUsersCommentsServicesLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateComments());
        dispatch(loadUsersCommentsServices(setUsersCommentsServices));
    }, []);

    let commentsElements = comments.map(c => (
        (
            <div key={c.id} className="comment-wrapper manipulation-item-wrapper">
                <div className="buttons">
                    <div>
                        <i
                            className="far fa-trash-alt icon-delete"
                            onClick={() => dispatch(deleteCommentEffect(c.id))}
                        />
                    </div>
                    <div>
                        <Link to={{pathname: `/services/${c.serviceType}/${c.serviceId}`, state: {from: 'admin'}}}
                              className="link-to-service">К услуге</Link>
                    </div>
                </div>
                <Comment rating={c.rating} name={c.name} surname={c.surname} commentDate={c.commentDate}
                         description={c.description}/>
            </div>
        )
    ));

    return (
        <section className="service-adding">
            <h2 className="services-manipulation__action-title" style={{marginBottom: 10}}>Комментарии
                пользователей</h2>
            <div className="comments-content">
                <div className="comments-user__comments" style={{maxWidth: 700}}>
                    {
                        !commentsElements.length && !isLoading ?
                            <h4 style={{textAlign: 'center', color: 'grey'}}>Нет
                                комментариев</h4> : <>{commentsElements}
                                <div>
                                    <PaginationButton
                                        classStyle="btn__load-more-b"
                                        callback={() => dispatch(loadUsersCommentsServices(setUsersCommentsServicesMore))}
                                        isShowingPaginationLoader={isLoading}
                                    />
                                </div>
                            </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Comments;