import * as Actions from '../actions';
import { createAction } from 'redux-actions';

export const setCityName =
    createAction(Actions.SET_CITY_NAME, (cityName) => cityName)
