import { CartState, CartActions, ADD_RECORD } from "../../types";

export default function cart(
  state: CartState = {
    selectedRecords: [],
  },
  action: CartActions
): CartState {
  switch (action.type) {
  case ADD_RECORD: {
    const recordId = action.payload;
    if (state.selectedRecords.find((recId) => recId === recordId)) {
      return state;
    }
    return {
      ...state,
      selectedRecords: [...state.selectedRecords, recordId],
    };
  }

  default:
    return state;
  }
}
