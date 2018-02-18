import * as Actions from '../actions'
import { createAction } from 'redux-actions';

export const setTotalShoppingList = createAction(Actions.SET_TOTAL_SHOPPING_LIST, (items) => (items + 1))
