import { HIDE_INPUT_PANE } from "../actions/types";
import uuid from "uuid/v4";
let initialState = { hide: false, clientId: uuid() };

export default (state = initialState, action) => {
  let { type } = action;
  switch (type) {
    case HIDE_INPUT_PANE:
      return { ...state, hide: !state.hide };

    default:
      return state;
  }
};
