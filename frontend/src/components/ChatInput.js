import React from "react";
import { Textarea } from "react-materialize";
import { connect } from "react-redux";
import { addMessage } from "../actions/Message";
import { getToken } from "../actions/Token";

import uuid from "uuid/v4";
import $ from "jquery";

const ChatInput = ({ addMessage, hide, token, getToken }) => {
  let message = "";

  if (token === "") getToken();
  let sendMessage = () => {
    if (message !== "")
      addMessage(
        {
          id: uuid(),
          contentType: "text",
          owner: "user",
          content: message
        },
        token
      );

    $(".materialize-textarea").val("");
    $(".materialize-textarea").attr("style", "height:43px");
  };

  return (
    <div className="row">
      {!hide ? (
        <div className="col s12 m8 offset-m2  chat-input">
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                sendMessage();
              }}
            >
              <Textarea
                label="Enter text message"
                s={10}
                data-length={30}
                error={"maximum digit counts exceeded!"}
                validate={true}
                onChange={e => {
                  message = e.target.value;
                }}
              />
              <button type="submit" className="btn-small btn-flat  send ">
                <i className="fa fa-lg fa-paper-plane blue-text "></i>
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};
const mapStateToProps = state => ({
  hide: state.mainPane.hide,
  token: state.token
});
export default connect(mapStateToProps, { addMessage, getToken })(ChatInput);
