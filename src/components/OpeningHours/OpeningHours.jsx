import React, {useState} from 'react';
import './OpeningHours.scss';
import {Property} from '../Stocks/StockItem/Property/Property';
import {animated, useTransition} from 'react-spring';
import {getOrderedOpeningHours} from '../../utils/utils';

const Day = ({dayOfWeek, openTime, closeTime, isCurrent, isClosed}) => {
    return (
        <div className={`day ${isCurrent && 'current'}`}>
            <span className="day__name">{dayOfWeek}:</span>
            <div className="day__time">
                <span className="day__time-open">{openTime}</span>
                {!isClosed && <span className="day__time-open">-{closeTime}</span>}
            </div>
        </div>
    );
}

export const OpeningHours = ({openingHours, isShowingAll}) => {
    let [isShowAllDays, setIsShowAllDays] = useState(false);
    const transitions = useTransition(isShowAllDays, null, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
    })

    const orderedOpeningHours = getOrderedOpeningHours(openingHours);

    return (
        <div className="opening-hours">
            <Property type="Время работы"
                      icon={<i className="far fa-clock"/>}/>
            {
                isShowingAll
                    ? <i
                        className="fas fa-angle-down show-all-days"
                        title="Все дни"
                        onClick={() => setIsShowAllDays(!isShowAllDays)}
                    />
                    : null
            }
            {transitions.map(({item, key, props}) =>
                item
                    ? <animated.div key={key} className="all-days" style={props}>
                        {orderedOpeningHours.map(o => <Day key={o.dayOfWeek} {...o}/>)}
                    </animated.div>
                    : null
            )}

        </div>
    );
};