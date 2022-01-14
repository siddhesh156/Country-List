import { GET_CONTACT_LIST,SEARCH_CONTACT_LIST,REVAL_CLICK_ACTION, UPDATE_COUNTRY } from './accountTypes'
import data from "../../data.json";

const initialState = {

    countryData: data?.countries || [],
    contactList: [],
    totalContacts:0,
    totalPageNumber:0

}
const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACT_LIST:
           
                return {
                    ...state,
                    contactList: state.contactList.concat(action.data),
                    totalContacts:action.totalContacts,
                    totalPageNumber:action.totalPageNumber
            }

            case UPDATE_COUNTRY:
           
                return {
                    ...state,
                    countryData: state.countryData.concat(action.data)
            }

        case SEARCH_CONTACT_LIST:return{
            ...state,
            contactList:action.data
        }  
        
        case REVAL_CLICK_ACTION :

     
        const newState = state.contactList.map((obj,i) =>
            i === action.data ? { ...obj, Reveal: false } : obj
        );
        
        return{
            ...state,
            contactList: newState
        }


        default: return state
    }
}

export default accountReducer