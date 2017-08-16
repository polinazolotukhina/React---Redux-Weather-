import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import weatherReducer from './weatherReducer';


const rootReducer = combineReducers({
    routing: routerReducer,
    weather: weatherReducer,
});

export default rootReducer;
