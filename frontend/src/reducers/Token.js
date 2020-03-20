import { GET_TOKEN } from "../actions/types";

let initialState = "";

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_TOKEN:
      return payload;

    default:
      return state;
  }
};
