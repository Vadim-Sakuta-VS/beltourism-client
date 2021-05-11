import {combineReducers} from 'redux';
import {appReducer} from './appReducer';
import {homeReducer} from './homeReducer';
import {servicesReducer} from './servicesReducer';
import {serviceDetailsReducer} from './serviceDetails/reducers';
import {bookmarksReducer} from './bookmarks/reducers';
import {adminReducer} from './admin/reducers';
import {bookingReducer} from './booking/reducers';

const rootReducer = combineReducers({
    app: appReducer,
    home: homeReducer,
    services: servicesReducer,
    serviceDetails: serviceDetailsReducer,
    bookmarks: bookmarksReducer,
    admin: adminReducer,
    booking: bookingReducer
})

export {rootReducer};