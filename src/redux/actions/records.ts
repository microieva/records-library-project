import { Dispatch } from "redux";
import { GET_RECORDS, GetRecordsAction, Record } from "../../types";

export function getRecords(records: Record[]): GetRecordsAction {
  return {
    type: GET_RECORDS,
    payload: {
      records,
    },
  };
}

export function fetchData() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/records");
      const data = await response.json();
      dispatch(getRecords(data));
    } catch (e) {
      console.log("ERROR______", e);
    }
  };
}
