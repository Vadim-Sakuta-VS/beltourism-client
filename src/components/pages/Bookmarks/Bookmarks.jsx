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
        console.log('eff')
        dispatch(getBookmarksForUser());
    }, []);

    console.log(services)

    let serviceItemsElements = services.map(s => (
        s.service.isActive && !s.service.isBooked && (
            <div key={s.service.id} className="service-item-wrapper" style={{maxWidth: 530}}>
                <ServiceItem service={s}/>
            </div>
        )
    ));

    return (
        <div className="bookmarks">
            <div className="container bookmarks__container">
                {
                    !serviceItemsElements.length && !isLoading ? <h2>Нет закладок</h2> : serviceItemsElements
                }
            </div>
        </div>
    );
};

export default Bookmarks;