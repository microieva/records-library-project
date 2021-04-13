import { UiActions, SHOW_SELECTION, SHOW_RECORD_INPUT } from "../../types";

export function showSelection(selectedOpen: boolean): UiActions {
  return {
    type: SHOW_SELECTION,
    payload: selectedOpen,
  };
}

export function showRecordInput(recInputOpen: boolean): UiActions {
  return {
    type: SHOW_RECORD_INPUT,
    payload: recInputOpen,
  };
}
