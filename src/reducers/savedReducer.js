import {
    SAVED_WEATHER
} from '../constants/actionTypes';
import initialState from './initialState';


// function savedWeather(saved, itemToAdd){
//    return saved = [...saved, itemToAdd];
// }
function savedWeather(saved, itemToAdd){
  var savednew = []
  const existing = saved.some(function (el) {
     return el.city.id === itemToAdd.city.id;
   });
   if (!existing) {
       savednew = [...saved, itemToAdd];
    } else{
      savednew = saved.filter(function(a){
        return a.city.id != itemToAdd.city.id;
      })
    }

    return savednew;

}



export default function savedReducer(state = initialState.saved, action) {
    switch (action.type) {
        case SAVED_WEATHER:
          return {
            ...state,
            saved: savedWeather( state.saved, action.saved)
          };

        default:
            return state;
    }
}
