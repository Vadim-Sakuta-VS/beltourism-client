import React, {useContext, useEffect, useState} from 'react';
import './ServiceDetails.scss';
import {Redirect, useLocation, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {MapContainer, Marker, TileLayer, Tooltip, ZoomControl} from 'react-leaflet';
import {BOOKING_STATUS, POPUPS_FORMS, SERVICES, VALIDATION_MES} from '../../../constants/constants';
import {HotelStars} from '../../HotelStars/HotelStars';
import {selectServiceData} from '../../../redux/serviceDetails/selectors';
import {PageWrapper} from '../PageWrapper';
import {PageLoader} from '../../PageLoader/PageLoader';
import {loadServiceData} from '../../../redux/serviceDetails/effects';
import {getOrderedOpeningHours} from '../../../utils/utils';
import {TabRow} from './TabRow';
import {Comments} from '../../Comments/Comments';
import {AuthContext} from '../../../App';
import {addBookmarksForUser, deleteBookmarksForUser, getBookmarksForUser} from '../../../redux/bookmarks/effects';
import {selectBookmarksLoading, selectUserBookmarks} from '../../../redux/bookmarks/selectors';
import {Form, Formik} from 'formik';
import {ButtonSubmit} from '../../Forms/ButtonSubmit/ButtonSubmit';
import * as Yup from 'yup';
import {SelectField} from '../../Forms/Fields/SelectField';
import {bookService} from '../../../redux/booking/effects';
import {selectUserBookingServicesData} from '../../../redux/booking/selectors';

const BookForm = ({setPopupInfo, serviceId, serviceType})=>{
    const {isUserAuth} = useContext(AuthContext);
    const dispatch = useDispatch();


    const commentsInitialValues = {
        paymentCurrency: '',
        serviceId,
        serviceType,
        status: BOOKING_STATUS.IN_PROGRESS,
    };

    const paymentArr = {
        BYN: 'Руб (BYN)',
        USD: '$ (USD)',
        EURO: '€ (EURO)',
    };

    let validationSchema = Yup.object().shape({
        paymentCurrency: Yup.string()
            .oneOf(Object.keys(paymentArr), VALIDATION_MES.REQUIRED)
            .required(VALIDATION_MES.REQUIRED),
    })


    return (
        <Formik
            initialValues={commentsInitialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, {setSubmitting, resetForm}) => {
                if (!isUserAuth) {
                    setPopupInfo({activeForm: POPUPS_FORMS.LOGIN, fromFormClosed: ''})
                    setSubmitting(false);
                    return;
                }

                let result = await dispatch(bookService(values));

                if (result) {
                    setSubmitting(false);
                    resetForm();
                }
            }}
        >
            {
                ({isValid, isSubmitting}) => {

                    return (
                        <Form className="book__form">
                            <SelectField
                                name="paymentCurrency"
                                options={[
                                    {value: "Выберите валюту", text: "Выберите валюту"},
                                    ...Object.keys(paymentArr).map(key => ({value: key, text: paymentArr[key]}))
                                ]}
                                style={{fontSize: "1rem"}}
                                styleError={{position: 'static'}}
                            />
                            <ButtonSubmit
                                value="Отправить"
                                isSubmitting={isSubmitting}
                                isValid={isValid}
                                styleWrap={{padding: 0, marginTop: '3%'}}
                                styleBtn={{height: '100%'}}
                            />
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

const ServiceDetails = ({setPopupInfo, isShowingPageLoader}) => {
    const [tabValue, setTabValue] = useState('Главное');
    const {type, id} = useParams();
    const {state} = useLocation();
    const {isUserAuth} = useContext(AuthContext);
    const service = useSelector(selectServiceData);
    const bookmarks = useSelector(selectUserBookmarks);
    const isBookmarksLoading = useSelector(selectBookmarksLoading);
    const bookings = useSelector(selectUserBookingServicesData);
    const isBookedService = bookings.find(b => b.service.service.id === +id);
    const dispatch = useDispatch();

    useEffect(() => {
        if (Object.keys(SERVICES).includes(type) && !isNaN(id) && id > 0) {
            dispatch(loadServiceData(id, type));
        }
    }, [dispatch, type, id]);

    useEffect(() => {
        if (isUserAuth) {
            dispatch(getBookmarksForUser());
        }
    }, [isUserAuth, dispatch]);

    if (!Object.keys(SERVICES).includes(type) || isNaN(id) || (!isNaN(id) && id < 1)) {
        return <Redirect to="/page404"/>
    }

    if (!isBookedService && service?.service?.isBooked
        && service?.service?.id === +id && state?.from !== 'admin') {
        return <Redirect to="/home"/>
    }

    if (!service || isBookmarksLoading) {
        return <PageLoader isShowingPageLoader={true}/>;
    }

    const onTabClickHandler = (e) => {
        e.target.className.includes('tab-btn') && setTabValue(e.target.textContent);
    }

    const name = service.service.name;
    const price = `${service.service.price}руб`;
    const description = service.service.description.length ? service.service.description : '---';
    const leaseType = service.service.leaseType === 'Тип аренды' ? '---' : service.service.leaseType;
    const category = service.service.category === 'Категория' ? '---' : service.service.category;
    const location = service.locations && service.locations[0].name
        && service.locations[0].address && service.locations[0];
    const locationStr = location ? `${location.name}, ${location.address}` : '---';
    const centerDistance = service.service.center_distance === null ? '---' : service.service.center_distance;
    const stars = service.service.stars;
    const picturesElements = Object.entries(service.pictures).map(([name, src]) => (
        <div className="picture-wrap">
            <img key={name} src={src} alt={name}/>
        </div>
    ));
    const orderedOpeningHours = getOrderedOpeningHours(service.openingHours);
    const openingHoursRows = orderedOpeningHours.map(o => {
        const value = o.isClosed ? o.openTime : `${o.openTime}-${o.closeTime}`;

        return (
            <TabRow
                key={o.dayOfWeek}
                title={o.dayOfWeek}
                value={value}
                style={o.isCurrent ? {borderBottom: '1px solid #1dd2af'} : null}
            />)
    });
    const contactDetails = service.contactDetails && service.contactDetails[0];
    const facilitiesElements = service.service.facilities && service.service.facilities.map(f => (
        <TabRow
            key={f.id}
            title={f.facilityName}
            value={`${f.extraPrice}руб`}
        />
    ));

    const bookmark = bookmarks.find(b => b.serviceId === +id);

    const onBookmarkClickHandler = () => {
        if (!isUserAuth) {
            setPopupInfo({activeForm: POPUPS_FORMS.LOGIN, fromFormClosed: ''})
            return;
        }
        const bookmark = bookmarks.find(b => b.serviceId === +id);
        if (bookmark) {
            dispatch(deleteBookmarksForUser(bookmark.id));
        } else {
            dispatch(addBookmarksForUser(+id, type));
        }
    }

    return (
        <PageWrapper isShowingPageLoader={isShowingPageLoader}>
            <div className="service-details">
                <div className="container service-details__container">
                    <div className="vertical-buttons">
                        {!isBookedService && !service.service.isBooked && <i className={`far fa-heart bookmark-icon
                        ${bookmark ? 'active' : ''}`}
                            title="Избранное"
                            onClick={onBookmarkClickHandler}
                        />}
                        {contactDetails && (
                            <a href={`tel:${contactDetails.phoneNumber}`} className="service-phone-link">
                                <i className="fas fa-phone"
                                   title={`Позвонить по номеру ${contactDetails.phoneNumber}`}/>
                            </a>)}
                    </div>
                    <div className="service-details-tabs" onClick={onTabClickHandler}>
                        <button
                            className={`service-details-tab-btn ${tabValue === 'Главное' ? 'active' : ''}`}
                        >
                            Главное
                        </button>
                        <button
                            className={`service-details-tab-btn ${tabValue === 'Картинки' ? 'active' : ''}`}
                        >
                            Картинки
                        </button>
                        {type === 'housing' && (
                            <button
                                className={`service-details-tab-btn ${tabValue === 'Доп. удобства' ? 'active' : ''}`}
                            >
                                Доп. удобства
                            </button>
                        )}
                        <button
                            className={`service-details-tab-btn ${tabValue === 'Время работы' ? 'active' : ''}`}
                        >
                            Время работы
                        </button>
                        <button
                            className={`service-details-tab-btn ${tabValue === 'Контактные данные' ? 'active' : ''}`}
                        >
                            Контактные данные
                        </button>
                        <button
                            className={`service-details-tab-btn ${tabValue.includes('Комментарии') ? 'active' : ''}`}
                        >
                            Комментарии {service.comments ? `(${service.comments.length})` : '(0)'}
                        </button>
                        {!isBookedService && <button
                            className={`service-details-book-tab-btn
                            ${tabValue.includes('Забронировать') ? 'active' : ''}`}
                        >
                            Забронировать
                        </button>}
                    </div>
                    <div className="service-details-tabs-content">
                        {tabValue === 'Главное' && (
                            <div className="tab-main-content">
                                <h2 className="tab-main-content__name">{name}</h2>
                                {stars && <HotelStars stars={stars}/>}
                                <TabRow title="Цена" value={price}/>
                                <TabRow title="Описание" value={description}/>
                                {leaseType && <TabRow title="Тип аренды" value={leaseType}/>}
                                {category && <TabRow title="Категория" value={category}/>}
                                {!isNaN(centerDistance) &&
                                <TabRow title="Расстояние от центра" value={`${centerDistance}м`}/>}
                                <div className="tab-main-content__location">
                                    <p>Адрес: {locationStr}</p>
                                    {location && (
                                        <MapContainer style={{height: '400px'}}
                                                      center={[location.latitude, location.longitude]} zoom={12}
                                                      zoomControl={false}>
                                            <TileLayer
                                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                            <ZoomControl position="topright"/>
                                            <Marker position={[location.latitude, location.longitude]}>
                                                <Tooltip>{locationStr}</Tooltip>
                                            </Marker>
                                        </MapContainer>
                                    )}
                                </div>
                            </div>
                        )}
                        {tabValue === 'Картинки' && (
                            <div className="tab-pictures-content">
                                {picturesElements.length ? picturesElements :
                                    'Нет картинок!'}
                            </div>
                        )}
                        {tabValue === 'Доп. удобства' && (
                            <div className="tab-facilities-content">
                                {facilitiesElements.length ? facilitiesElements :
                                    'Информация не предоставлена!'}
                            </div>
                        )}
                        {tabValue === 'Время работы' && (
                            <div className="tab-opening-hours-content">
                                {service.openingHours ? openingHoursRows :
                                    'Информация не предоставлена!'}
                            </div>
                        )}
                        {tabValue === 'Контактные данные' && (
                            <div className="tab-contact-details-content">
                                {
                                    contactDetails ? (
                                        <>
                                            <TabRow
                                                title="Email"
                                                value={contactDetails.email}
                                            />
                                            <TabRow
                                                title="Основной телефон"
                                                value={contactDetails.phoneNumber}
                                            />
                                            {contactDetails.mobilePhone &&
                                            <TabRow
                                                title="Дополнительный телефон"
                                                value={contactDetails.mobilePhone}
                                            />}
                                        </>
                                    ) : 'Информация не предоставлена!'
                                }
                            </div>
                        )}
                        {tabValue.includes('Комментарии') && (
                            <div className="tab-comments-content">
                                <Comments
                                    setPopupInfo={setPopupInfo}
                                    serviceId={+id}
                                    serviceType={type}
                                    comments={service.comments}
                                />
                            </div>
                        )}
                        {tabValue === 'Забронировать' && (
                            <div className="tab-book-content">
                                <h2 className="tab-book-content__name">Бронирование</h2>
                                <BookForm serviceId={+id} serviceType={type} setPopupInfo={setPopupInfo}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default ServiceDetails;