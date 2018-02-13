import { combineReducers } from 'redux';
import locationReducer from './Localisation/locationReducer'

export default combineReducers({
    location: locationReducer
});
