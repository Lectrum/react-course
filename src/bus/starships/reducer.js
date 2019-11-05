// Types
import { types } from './types';

const initialState = {
    data: [],
    isFetching: false
};

export const starshipsReducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case types.STARSHIPS_START_FETCHING:
            return { ...state, isFetching: true };
        case types.STARSHIPS_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.STARSHIPS_FILL:
            return { ...state, data: payload };
    
        default:
            return state;
    }
}