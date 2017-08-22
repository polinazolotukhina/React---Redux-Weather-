import * as types from '../constants/actionTypes';
const queryString = require('query-string');



function weatherRequest() {
    return {
        type: types.W_REQUEST,
        isLoading: true,
        error: null
    };
}

function weatherSuccess(json) {
    return{
        type: types.W_SUCCESS,
        data: json,
        isLoading: false,
        error: null
    };
}

function weatherFailure(json) {
    return {
        type: types.W_FAILURE,
        isLoading: false,
        error: json
    };
}
// ------------------ SAVED------------------
function saveIt(item) {
    return {
        type: types.SAVED_WEATHER,
        saved: item
    };
}

export function saveUnsave(city) {
  return (dispatch) => {
    dispatch(saveIt(city));
  };
}

// ------------------------------------




export function getWeather(params,) {
    const API_KEY = 'f68920d50b2322ad39371e2998558c85';
    const parameters = {
      appid: API_KEY,
      type: 'like',
      ...params
    };
    const query = queryString.stringify(parameters);
    const url = `http://api.openweathermap.org/data/2.5/forecast?${query}`;

    return (dispatch) => {
        dispatch(weatherRequest());
        fetch(url)
        .then((response) => {
            return response;
        })
        .then((response) => response.json())
        .then((items) => dispatch(weatherSuccess(items)))
        .catch((error) => dispatch(weatherFailure(error)));
    };
}
