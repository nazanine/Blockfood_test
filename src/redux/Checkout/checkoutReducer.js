import { handleActions } from 'redux-actions';
import * as Actions from '../actions'

const DEFAULT_VALUE = {
    totalShoppingItem: 0,
    addedIds: [],
    quantityById: {}
}

export default handleActions({
    [Actions.SET_TOTAL_SHOPPING_LIST]: (state, action) => {
        return {
            ...state,
            totalShoppingItem: action.payload
        }
    }
}, DEFAULT_VALUE)