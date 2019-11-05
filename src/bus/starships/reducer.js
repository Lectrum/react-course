// Types
import { types } from './types';

const initialState = {
    data: []
};

export const starshipsReducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case types.STARSHIPS_FILL:
            return { ...state, data: payload };
    
        default:
            return state;
    }
}