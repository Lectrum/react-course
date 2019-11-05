import { combineReducers } from 'redux';

import { userReducer as user } from '../bus/user/reducer';
import { starshipsReducer as starships } from '../bus/starships/reducer';

export const rootReducer = combineReducers({
    user,
    starships
});