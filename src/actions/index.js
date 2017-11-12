import axios from 'axios';

const API_KEY = '6b79222d559da62ea821d267d474424f'; //api key goes here
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; //same as: 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
//(remember that the back ticks allow for es6 syntax to include the API_KEY variable

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('request', request);

    return {
        //actions are objects and always always always have a type:
        type: FETCH_WEATHER,
        //the promise is returned as the payload (from the request)
        //when the payload (request) is a promise, redux-promise stops the action entirely
        //  and then once the request finishes, it dispatches a new action of the same type
        //  but with a payload of the resolved request (aka it unwraps the promise for us)
        payload: request
    };
}