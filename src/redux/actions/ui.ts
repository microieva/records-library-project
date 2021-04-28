import { UiActions, SHOW_SELECTION, SHOW_RECORD_FORM } from "../../types";

export function showSelection(selectedOpen: boolean): UiActions {
  return {
    type: SHOW_SELECTION,
    payload: selectedOpen,
  };
}

export function showRecordForm(recFormOpen: boolean): UiActions {
  return {
    type: SHOW_RECORD_FORM,
    payload: recFormOpen,
  };
}
