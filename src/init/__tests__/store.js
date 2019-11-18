import { combineReducers, createStore } from 'redux';

import { starshipsReducer as starships } from '../../bus/starships/reducer';
import { planetsReducer as planets } from '../../bus/planets/reducer';

import { store } from '../store';

export const referenceRootReducer = combineReducers({
    starships,
    planets
});

const referenceStore = createStore(referenceRootReducer);

describe('store:', () => {
    test('should have valid state shape', () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    })
})