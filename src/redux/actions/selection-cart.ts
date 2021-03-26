import { ADD_RECORD, Record, CartActions } from "../../types";

export function addRecord(record: Record): CartActions {
  return {
    type: ADD_RECORD,
    payload: record._id,
  };
}
