import { combineReducers } from 'redux'
import accountReducer from './AccountDetails/accountReducer'
const rootReducer = combineReducers({
    accountDetails: accountReducer,
})

export default rootReducer