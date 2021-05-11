import React, {useEffect} from 'react';
import {
    changeStatusEffect,
    deleteBookingEffect,
    loadUsersBookServices
} from '../../../../redux/admin/effects';
import {BOOKING_STATUS} from '../../../../constants/constants';
import ServiceItem from '../../Services/ServiceItem/ServiceItem';
import PaginationButton from '../../../PaginationButton/PaginationButton';
import {useDispatch, useSelector} from 'react-redux';
import {selectUsersBookingServicesData, selectUsersBookingServicesLoading} from '../../../../redux/admin/selectors';
import {setUsersBookingServices, setUsersBookingServicesMore, updateBookings} from '../../../../redux/admin/actions';

const Booking = () => {
    const bookingServices = useSelector(selectUsersBookingServicesData);
    const isLoading = useSelector(selectUsersBookingServicesLoading);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(updateBookings());
        dispatch(loadUsersBookServices(setUsersBookingServices));
    },[]);

    let serviceItemsElements = bookingServices.map(b => (
        b.service && b.service.service.isActive &&
        (
            <div key={b.service.id} className="service-item-wrapper">
                {b.status === BOOKING_STATUS.CANCELED && <div className="canceled-wrap">Отменено</div>}
                <div className="buttons">
                    {b.status === BOOKING_STATUS.CANCELED && <button
                        className="btn"
                        onClick={()=>dispatch(changeStatusEffect(b.id, BOOKING_STATUS.IN_PROGRESS))}
                    >
                        Восстановить
                    </button>}
                    {b.status === BOOKING_STATUS.IN_PROGRESS && <button
                        className="btn"
                        onClick={()=>dispatch(changeStatusEffect(b.id, BOOKING_STATUS.CANCELED))}
                    >
                        Отменить
                    </button>}
                    <div>
                        <i
                            className="far fa-trash-alt icon-delete-service"
                            onClick={() => dispatch(deleteBookingEffect(b.id))}
                        />
                    </div>
                </div>
                <ServiceItem service={b.service}/>
            </div>
        )
    ));

    return (
        <section className="service-adding">
            <h2 className="services-manipulation__action-title" style={{marginBottom: 10}}>Забронированные услуги</h2>
            <div className="booking-content">
                <div className="booking-user__services" style={{maxWidth: 530}}>
                    {
                        !serviceItemsElements.length && !isLoading ?
                            <h4 style={{textAlign: 'center', color: 'grey'}}>Нет
                                забронированных услуг</h4> : <>{serviceItemsElements}
                                <div>
                                    <PaginationButton
                                        classStyle="btn__load-more-b"
                                        callback={() => dispatch(loadUsersBookServices(setUsersBookingServicesMore))}
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

export default Booking;