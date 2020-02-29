import { ADD_MESSAGE } from "../actions/types";

let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADD_MESSAGE: {
      let old = state.filter(msg => msg.id !== payload.id);

      let massages = [...old, payload];

      return massages;
    }
    default:
      return state;
  }
};
