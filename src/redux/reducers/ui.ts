import {
  UiState,
  UiActions,
  SHOW_SELECTION,
  SHOW_RECORD_INPUT,
} from "../../types";

export default function ui(
  state: UiState = {
    selectionOpen: false,
    recInputOpen: false,
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
  case SHOW_RECORD_INPUT: {
    return {
      ...state,
      recInputOpen: action.payload,
    };
  }
  default:
    return state;
  }
}
