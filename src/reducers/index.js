import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import weatherReducer from './weatherReducer';
import savedReducer from './savedReducer';


const rootReducer = combineReducers({
    routing: routerReducer,
    weather: weatherReducer,
    saved: savedReducer
});

export default rootReducer;
