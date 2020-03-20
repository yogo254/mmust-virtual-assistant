import { combineReducers } from "redux";
import messages from "./MessageReducer";
import mainPane from "./MainPaneReducer";
import token from "./Token";

const rootReducer = combineReducers({
  messages,
  mainPane,
  token
});

export default rootReducer;
