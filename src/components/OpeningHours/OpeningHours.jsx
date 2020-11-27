import React, {useState} from 'react';
import "./OpeningHours.scss";
import {Property} from "../Stocks/StockItem/Property/Property";
import {animated, useTransition} from "react-spring";

const DAYS = {
    "Понедельник": 1,
    "Вторник": 2,
    "Среда": 3,
    "Четверг": 4,
    "Пятница": 5,
    "Субботта": 6,
    "Воскресенье": 0
}

const Day = ({day_of_week, open_time, close_time}) => {
    let numberDay = new Date().getDay();
    let isCurrentDay = numberDay === DAYS[day_of_week];
    let date1=new Date();
    let date2=new Date();
    // date2.setMonth(9);

    return (
        <div className={`day ${isCurrentDay && "current"}`}>
            <span className="day__name">{day_of_week}:</span>
            <div className="day__time">
                <span className="day__time-open">{open_time}-</span>
                <span className="day__time-open">{close_time}</span>
            </div>
        </div>
    );
}

export const OpeningHours = ({opening_hours, isShowingAll}) => {
    let [isShowAllDays, setIsShowAllDays] = useState(false);
    const transitions = useTransition(isShowAllDays, null, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
    })

    // let date=new Date("2000-01-01T23:59:59");
    // console.log(date)

    // const getInfoTimeWork = () => {
    //     new Date()
    //     let date = new Date();
    //     for (const o of opening_hours) {
    //         if(date.getDay() === DAYS[o.day_of_week]){
    //
    //         }
    //     }
    // }

    return (
        <div className="opening-hours">
            <Property type="Время работы" value="Открыто до X"
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
                        {opening_hours.map(o => <Day key={o.id} {...o}/>)}
                    </animated.div>
                    : null
            )}

        </div>
    );
};