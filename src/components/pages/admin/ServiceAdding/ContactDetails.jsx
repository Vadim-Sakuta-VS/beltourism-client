import React from 'react';
import './ContactDetails.scss';

const ContactDetails = ({contactDetails, setFieldValue}) => {
    const onChangeHandler = (e => {
        setFieldValue('contactDetails', {
            ...contactDetails,
            [e.target.name]: e.target.value
        });
    });

    return (
        <div className='contact-details' onChange={onChangeHandler}>
            <h3 className='contact-details__title'>Контактные данные</h3>
            <input
                name="email"
                type="email"
                placeholder="Email"
                className='contact-details__input'
                value={contactDetails.email || ''}
                autoComplete='off'
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}'
                title='Пример: user123@gmail.com'
                required={true}
                onChange={() => {
                }}
            />
            <input
                name="phoneNumber"
                type="tel"
                placeholder="Моб. телефон"
                className='contact-details__input'
                value={contactDetails.phoneNumber || ''}
                autoComplete='off'
                pattern='^375(25|29|33|44)[0-9]{7}$'
                title='Пример: 375331234567'
                required={true}
                onChange={() => {
                }}
            />
            <input
                name="mobilePhone"
                type="tel"
                placeholder="Доп. телефон"
                className='contact-details__input'
                value={contactDetails.mobilePhone || ''}
                autoComplete='off'
                pattern='^375(25|29|33|44)[0-9]{7}$'
                title='Пример: 375331234567'
                onChange={() => {
                }}
            />
        </div>
    );
};

export default ContactDetails;