import { UPDATE_COUNTRY } from "./countryTypes";

export const updateCountry = (data) => {
  let obj = data;
  if (obj === undefined) {
    obj = [];
  }

  return (dispatch) => {
    dispatch({ type: UPDATE_COUNTRY, data: obj });
  };
};
