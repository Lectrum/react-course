import { starshipsReducer } from '../reducer';
import { starshipsActions } from '../actions';

describe('starships reducer:', () => {
    test('should return initial state by default', () => {
        expect(starshipsReducer(void 0, {})).toMatchSnapshot();
    });
    test('should handle START_FETCHING action', () => {
        expect(starshipsReducer(void 0, starshipsActions.startFetching())).toMatchSnapshot();
    })
});