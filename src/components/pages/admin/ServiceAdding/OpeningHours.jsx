import React from 'react';
import './OpeningHours.scss';

const DaysItem = ({dayNameRu, dayNameEn, onChangeHandler, getTime, checkExistDay, filterDays}) => {
    return (
        <div className='day days__item' data-day={dayNameEn} onChange={onChangeHandler}>
            <p className='day__label'>{dayNameRu}:</p>
            <div className='day__time'>
                <span className='day__time-from'>С:</span>
                <input type="time" data-from='from'
                       value={getTime(dayNameEn, 'openTime')}
                       onChange={() => {
                       }}
                />
                <span className='day__time-to'>До:</span>
                <input type="time" data-to='to'
                       value={getTime(dayNameEn, 'closeTime')}
                       onChange={() => {
                       }}
                />

            </div>
            {checkExistDay(dayNameEn) ?
                <span
                    title='Удалить время работы'
                    onClick={() => filterDays(dayNameEn)}
                >-</span>
                : null}
        </div>
    )
}

const OpeningHours = ({setFieldValue, openingHours}) => {

    const onChangeHandler = (e) => {
        console.log('changeTime')
        console.log(e.target)
        console.log(e.currentTarget)

        const setTimeProp = (day, prop, time) => {
            if (time == null) {
                day[prop] = '00:00';
            } else {
                day[prop] = time;
            }
        }

        const updateTime = (day) => {
            let timeFrom, timeTo;
            timeFrom = e.target.dataset.from;

            if (timeFrom) {
                timeFrom = e.target.value;
                timeTo = e.target.nextElementSibling.nextElementSibling.value;
            } else {
                timeTo = e.target.value;
                timeFrom = e.target.previousElementSibling.previousElementSibling.value;
            }

            timeFrom = timeFrom === '' ? null : timeFrom;
            timeTo = timeTo === '' ? null : timeTo;

            setTimeProp(day, 'openTime', timeFrom);
            setTimeProp(day, 'closeTime', timeTo);
        }

        const dayName = e.currentTarget.dataset.day;
        let changedOpeningHours;

        console.log(openingHours.find(d => d.dayOfWeek === dayName))

        if (openingHours.find(d => d.dayOfWeek === dayName)) {
            changedOpeningHours = openingHours.map((day) => {

                if (day.dayOfWeek === dayName) {
                    updateTime(day);
                }

                return day;
            });
        } else {
            let day = {
                dayOfWeek: dayName,
            };

            updateTime(day)
            changedOpeningHours = [...openingHours, day];
        }

        setFieldValue('openingHours', changedOpeningHours);
    }

    const getTime = (dayName, typeTime) => {
        let day = openingHours && openingHours.find(d => d.dayOfWeek === dayName);
        if (!day) {
            return '00:00';
        }
        return day[typeTime];
    }

    const checkExistDay = (dayName) => openingHours && openingHours.find(d => d.dayOfWeek === dayName);
    const filterDays = (dayName) => {
        let changedOpeningHours = openingHours.filter(d => d.dayOfWeek !== dayName);
        setFieldValue('openingHours', changedOpeningHours);
    };

    console.log(getTime('MONDAY', 'openTime'))

    return (
        <div className='opening-hours-block' style={{marginTop: '15px'}}>
            <header>
                <h3 className='opening-hours__title'>Время работы:</h3>
                {/*<i className="fas fa-long-arrow-alt-down"/>*/}
                {/*<i className="fas fa-long-arrow-alt-up"/>*/}
            </header>
            <div className='days'>
                <DaysItem
                    dayNameRu='Понедельник'
                    dayNameEn='MONDAY'
                    checkExistDay={checkExistDay}
                    onChangeHandler={onChangeHandler}
                    getTime={getTime}
                    filterDays={filterDays}
                />
                <DaysItem
                    dayNameRu='Вторник'
                    dayNameEn='TUESDAY'
                    checkExistDay={checkExistDay}
                    onChangeHandler={onChangeHandler}
                    getTime={getTime}
                    filterDays={filterDays}
                />
                <DaysItem
                    dayNameRu='Среда'
                    dayNameEn='WEDNESDAY'
                    checkExistDay={checkExistDay}
                    onChangeHandler={onChangeHandler}
                    getTime={getTime}
                    filterDays={filterDays}
                />
                <DaysItem
                    dayNameRu='Четверг'
                    dayNameEn='THURSDAY'
                    checkExistDay={checkExistDay}
                    onChangeHandler={onChangeHandler}
                    getTime={getTime}
                    filterDays={filterDays}
                />
                <DaysItem
                    dayNameRu='Пятница'
                    dayNameEn='FRIDAY'
                    checkExistDay={checkExistDay}
                    onChangeHandler={onChangeHandler}
                    getTime={getTime}
                    filterDays={filterDays}
                />
                <DaysItem
                    dayNameRu='Суббота'
                    dayNameEn='SATURDAY'
                    checkExistDay={checkExistDay}
                    onChangeHandler={onChangeHandler}
                    getTime={getTime}
                    filterDays={filterDays}
                />
                <DaysItem
                    dayNameRu='Воскресенье'
                    dayNameEn='SUNDAY'
                    checkExistDay={checkExistDay}
                    onChangeHandler={onChangeHandler}
                    getTime={getTime}
                    filterDays={filterDays}
                />
            </div>
        </div>
    );
};

export default OpeningHours;