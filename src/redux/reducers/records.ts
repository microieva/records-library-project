import { RecordsState, RecordActions, GET_RECORDS } from "../../types";

export default function records(
  state: RecordsState = {
    records: [],
  },
  action: RecordActions
): RecordsState {
  switch (action.type) {
  case GET_RECORDS: {
    return { ...state, records: action.payload.records };
  }

  default:
    return state;
  }
}
