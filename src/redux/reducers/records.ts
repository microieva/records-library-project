import {
  //FormState,
  RecordsState,
  RecordActions,
  GET_RECORDS,
  ADD_RECORD,
} from "../../types";

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
  case ADD_RECORD: {
    const newRec = action.payload;
    console.log("REDUCER: newRec", newRec);
    return { ...state, records: [...state.records, newRec] };
  }

  default:
    return state;
  }
}
