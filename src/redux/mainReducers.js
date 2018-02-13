import { handleActions } from 'redux-actions';

import * as Actions from './actions';

const DEFAULT_STATE = {
    cityName: 'loading...'
}
const mainReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type){
        default:
            return state
    }
}

export default mainReducer
