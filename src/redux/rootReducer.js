import {combineReducers} from "redux";
import {appReducer} from "./appReducer";
import {homeReducer} from "./homeReducer";
import {servicesReducer} from "./servicesReducer";

const rootReducer = combineReducers({
    app: appReducer,
    home: homeReducer,
    services: servicesReducer
})

export {rootReducer};