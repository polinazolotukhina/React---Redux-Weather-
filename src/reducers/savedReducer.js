import {
    SAVED_WEATHER
} from '../constants/actionTypes';
import initialState from './initialState';


function favouriteMovie(saved, itemToAdd){
   return saved = [...saved, itemToAdd];
}



export default function savedReducer(state = initialState.saved, action) {
    switch (action.type) {
        case SAVED_WEATHER:
          return {
            ...state,
            saved: favouriteMovie( state.saved, action.saved)
          };

        default:
            return state;
    }
}
