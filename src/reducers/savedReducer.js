import {
    SAVED_WEATHER
} from '../constants/actionTypes';
import initialState from './initialState';


export default function savedReducer(state = initialState.saved, action) {
    switch (action.type) {
        case SAVED_WEATHER:
          console.log('state', state);
          return {
            ...state,
            saved: action.saved
          };

        default:
            return state;
    }
}
