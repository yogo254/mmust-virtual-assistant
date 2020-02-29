import { HIDE_INPUT_PANE } from "./types";
export const hideInputPane = () => dispatch => {
  dispatch({ type: HIDE_INPUT_PANE });
};
