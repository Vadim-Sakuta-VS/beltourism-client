import React, {useEffect} from 'react';
import './Bookmarks.scss';
import {useDispatch, useSelector} from 'react-redux';
import {selectBookmarksLoading, selectUserBookmarksServices} from '../../../redux/bookmarks/selectors';
import {getBookmarksForUser} from '../../../redux/bookmarks/effects';
import ServiceItem from '../Services/ServiceItem/ServiceItem';

const Bookmarks = () => {
    const services = useSelector(selectUserBookmarksServices);
    const isLoading = useSelector(selectBookmarksLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBookmarksForUser());
    }, []);

    let serviceItemsElements = services.map(s => (
        s.service.isActive && !s.service.isBooked && (
            <div key={s.service.id} className="service-item-wrapper" style={{maxWidth: 530}}>
                <ServiceItem service={s}/>
            </div>
        )
    )).filter(s => typeof s !== 'boolean');

    return (
        <div className="bookmarks">
            <div className="container bookmarks__container">
                <div className="bookmarks__services" style={{maxWidth: 530, margin: '0 auto'}}>
                    {
                        (!serviceItemsElements.length && !isLoading) ?
                            <h2 style={{textAlign: 'center'}}>Нет закладок</h2> : serviceItemsElements
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;