import {DAYS} from '../constants/constants';

export function getOrderedOpeningHours(openingHours) {
    return Object.keys(DAYS).map(day => {
        const orderedDay = openingHours && openingHours.find(o => o.dayOfWeek === day);
        const currentDayNumber = new Date().getDay();
        return orderedDay
            ? {
                dayOfWeek: DAYS[day].valueRu,
                openTime: orderedDay.openTime.slice(0, 5),
                closeTime: orderedDay.closeTime.slice(0, 5),
                isCurrent: DAYS[day].number === currentDayNumber,
                isClosed: false
            }
            : {
                dayOfWeek: DAYS[day].valueRu,
                openTime: 'Закрыто',
                isCurrent: DAYS[day].number === currentDayNumber,
                isClosed: true,
            }
    })
}

export function sortArrayDecreaseByProp(arr, prop) {
    const copyArr = [...arr];
    return copyArr.sort((a, b) => b[prop] - a[prop]);
}