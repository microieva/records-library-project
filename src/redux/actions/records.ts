import { Dispatch } from "redux";
import { GET_RECORDS, RecordActions, Record, ADD_RECORD } from "../../types";

export function getRecords(records: Record[]): RecordActions {
  return {
    type: GET_RECORDS,
    payload: {
      records,
    },
  };
}

export function fetchRecords() {
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

export function addRecord(record: Record): RecordActions {
  return {
    type: ADD_RECORD,
    payload: record,
  };
}
