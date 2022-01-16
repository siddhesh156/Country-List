import { combineReducers } from 'redux'
import countryReducer from './CountryDetails/countryReducer'
const rootReducer = combineReducers({
    countryDetails: countryReducer,
})

export default rootReducer