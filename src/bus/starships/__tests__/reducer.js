import { starshipsReducer } from '../reducer';
import { starshipsActions } from '../actions';
import { types } from '../types';

describe('starships reducer:', () => {
    test('should return initial state by default', () => {
        expect(starshipsReducer(void 0, {})).toMatchSnapshot();
    });
    test(`should handle ${types.STARSHIPS_START_FETCHING} action`, () => {
        expect(starshipsReducer(void 0, starshipsActions.startFetching())).toMatchSnapshot();
    })
});