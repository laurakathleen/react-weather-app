import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    console.log('Action received', action);
    //we care about action.payload.data
    switch (action.type) {
        case FETCH_WEATHER:
            //never update state directly i.e: return state.push(action.payload.data)
            //  we can use concat because it doesn't change the existing array, instead it creates a new array
            //  so this will work
            //  this: return state.concat([action.payload.data]);  is equivalent to the below code:
            return [ action.payload.data, ...state ];
    }
    return state;
}