import {
  UiState,
  UiActions,
  SHOW_SELECTION,
  SHOW_RECORD_FORM,
} from "../../types";

export default function ui(
  state: UiState = {
    selectionOpen: false,
    recFormOpen: false,
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
  case SHOW_RECORD_FORM: {
    return {
      ...state,
      recFormOpen: action.payload,
    };
  }
  default:
    return state;
  }
}
