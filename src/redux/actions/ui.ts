import { UiActions, SHOW_SELECTION } from "../../types";

export function showSelection(selectedOpen: boolean): UiActions {
  return {
    type: SHOW_SELECTION,
    payload: selectedOpen,
  };
}
