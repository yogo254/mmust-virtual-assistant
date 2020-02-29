import React, { Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Navbar from "./components/Navbar";
import ChatPane from "./components/ChatPane";
import ChatInput from "./components/ChatInput";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import "./css/callout.css";

function App() {
  return (
    <Provider store={store.store}>
      <Fragment>
        <div className="main">
          <Navbar />

          <ChatPane />

          <ChatInput />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
