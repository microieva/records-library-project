export {};
/*import { Dispatch } from 'redux';
import {
  GET_COUNTRIES,
  GetCountriesAction,
  Country,
} from '../../types'
//CHANGES FOR USERS
export function getCountries(countries: Country[]): GetCountriesAction {
  return {
    type: GET_COUNTRIES,
    payload: {
      countries,
    },
  }
}

export function fetchData()  {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await response.json();
      dispatch(getCountries(data))
    } catch (e) {
      console.log("ERROR______", e);
    }
  }
};*/
