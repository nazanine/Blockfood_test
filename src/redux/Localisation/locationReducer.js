import { handleActions } from 'redux-actions';
import * as Actions from '../actions';

const DEFAULT_STATE = {
    cityName: 'loading...'
}

export default handleActions({
    [Actions.SET_CITY_NAME]: (state , action) => {
        return {
            ...state,
            cityName: action.payload
        }
}}, DEFAULT_STATE);
