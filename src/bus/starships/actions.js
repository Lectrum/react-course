// Types
import { types } from './types';

export const starshipsActions = Object.freeze({
    // Sync
    fill: (payload) => {
        return {
            type: types.STARSHIPS_FILL,
            payload
        }
    },
    // Async
    fetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.STARSHIPS_FETCH_ASYNC
        });
        // More code later
    }
});