// Types
import { types } from './types';

import { api } from '../../api';

export const starshipsActions = Object.freeze({
    // Sync
    startFetching: () => {
        return {
            type: types.STARSHIPS_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.STARSHIPS_STOP_FETCHING,
        }
    },
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

        dispatch(starshipsActions.startFetching());
        
        const response = await api.starships.fetch();
        const { results } = await response.json();
        
        dispatch(starshipsActions.fill(results));

        dispatch(starshipsActions.stopFetching());
    }
});