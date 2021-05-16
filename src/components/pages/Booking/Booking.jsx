import React, {useEffect} from 'react';
import './Booking.scss';
import ServiceItem from '../Services/ServiceItem/ServiceItem';
import PaginationButton from '../../PaginationButton/PaginationButton';
import {useDispatch, useSelector} from 'react-redux';
import {loadUserBookServices} from '../../../redux/booking/effects';
import {setUserBookingServices, setUserBookingServicesMore, updateBookings} from '../../../redux/booking/actions';
import {selectUserBookingServicesData, selectUserBookingServicesLoading} from '../../../redux/booking/selectors';
import {BOOKING_STATUS} from '../../../constants/constants';
import {TabRow} from '../ServiceDetails/TabRow';

const Booking = () => {
    const bookingServices = useSelector(selectUserBookingServicesData);
    const isLoading = useSelector(selectUserBookingServicesLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateBookings());
        dispatch(loadUserBookServices(setUserBookingServices));
    }, []);

    let serviceItemsElements = bookingServices.map(b => (
        b.service && b.service.service.isActive && (
            <div key={b.id} className="service-item-wrapper">
                {b.status === BOOKING_STATUS.CANCELED && <div className="canceled-wrap">Отменено</div>}
                <ServiceItem service={b.service}/>
            </div>
        )
    ));

    return (
        <div className="booking-user">
            <div className="container">
                <div className="profile">
                    <h2 className='profile__title'>Профиль пользователя</h2>
                    <TabRow title='Имя' value={localStorage.getItem('user-name')}/>
                    <TabRow title='Фамилия' value={localStorage.getItem('user-surname')}/>
                    <TabRow title='Email' value={localStorage.getItem('user-email')}/>
                </div>
                <h2 className="booking-user__title">Забронированные услуги</h2>
                <div className="booking-content">
                    <div className="booking-user__services" style={{maxWidth: 530, margin: '0 auto'}}>
                        {
                            !serviceItemsElements.length && !isLoading ?
                                <h4 style={{textAlign: 'center', color: 'grey'}}>Нет
                                    забронированных услуг</h4> : <>{serviceItemsElements}
                                    <div>
                                        <PaginationButton
                                            classStyle="btn__load-more-b"
                                            callback={() => {
                                                dispatch(loadUserBookServices(setUserBookingServicesMore))
                                            }}
                                            isShowingPaginationLoader={isLoading}
                                        />
                                    </div>
                                </>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;