import { GET_CONTACT_LIST,SEARCH_CONTACT_LIST,REVAL_CLICK_ACTION, UPDATE_COUNTRY } from './accountTypes'
import contactListData from '../../contactList'
import countryData from "../../data.json";



export const getContactList = pageNumber => {

    let data
    if(pageNumber === undefined){
         data = contactListData.slice(0,30)
    }else{
        let pageStart = pageNumber * 30
        console.log(pageStart)
         data = contactListData.slice(pageStart,pageStart+30)
    }

    let count = contactListData.length
    let totalPage = 3
   
    return (dispatch) => {

        dispatch({ type: GET_CONTACT_LIST, data:data,totalContacts:count,totalPageNumber:totalPage })
    }
}

export const updateSearchChanged =value =>{

    const searchKey=value.toLowerCase()
    let obj = contactListData.filter(item => item.name.toLowerCase() === searchKey || item.position.toLowerCase() === searchKey)

    console.log(obj)

    if(obj === undefined){
        obj = []
    }

    return (dispatch) => {

        dispatch({ type: SEARCH_CONTACT_LIST, data:obj })
    }
}

export const updateCountry = data =>{
    let obj = data;
    if(obj === undefined){
        obj = []
    }

    return (dispatch) => {

        dispatch({ type: UPDATE_COUNTRY, data:obj })
    }
}

export const revalClick = i =>{
    return (dispatch) => {

        dispatch({ type: REVAL_CLICK_ACTION, data:i })
    }
}


