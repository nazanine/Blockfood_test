import { combineReducers } from 'redux';
import locationReducer from './Localisation/locationReducer'
import checkoutReducer from './Checkout/checkoutReducer'

export default combineReducers({
    location: locationReducer,
    checkout: checkoutReducer
});
