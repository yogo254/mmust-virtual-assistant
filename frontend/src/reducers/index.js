import { combineReducers } from "redux";
import messages from "./MessageReducer";
import mainPane from "./MainPaneReducer";

const rootReducer = combineReducers({ messages, mainPane });

export default rootReducer;
