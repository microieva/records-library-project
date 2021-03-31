import { UiState, UiActions, SHOW_SELECTION } from "../../types";

export default function ui(
  state: UiState = {
    selectionOpen: false,
  },
  action: UiActions
): UiState {
  switch (action.type) {
  case SHOW_SELECTION: {
    return {
      ...state,
      selectionOpen: action.payload,
    };
  }
  default:
    return state;
  }
}
