import { UPDATE_COUNTRY } from "./countryTypes";
import data from "../../data.json";

const initialState = {
  countryData: data?.countries || [],
};
const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COUNTRY:
      return {
        ...state,
        countryData: state.countryData.concat(action.data),
      };

    default:
      return state;
  }
};

export default countryReducer;
