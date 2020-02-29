import React from "react";
import { Textarea } from "react-materialize";
import { connect } from "react-redux";
import { addMessage } from "../actions/Message";
import uuid from "uuid/v4";
import $ from "jquery";

const ChatInput = ({ addMessage, hide }) => {
  let message = "";
  return (
    <div className="row">
      {!hide ? (
        <div className="col s12 m8 offset-m2  chat-input">
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                addMessage({
                  id: uuid(),
                  contentType: "text",
                  owner: "user",
                  content: message
                });
                $(".materialize-textarea").val("");
                $(".materialize-textarea").attr("style", "height:43px");
              }}
            >
              <Textarea
                label="Enter text message"
                s={10}
                data-length={300}
                error={"maximum digit counts exceeded!"}
                validate={true}
                onChange={e => {
                  message = e.target.value;
                }}
              />
              <button type="submit" className="btn-small btn-flat  send ">
                <i className="fa fa-lg fa-paper-plane blue-text "></i> send
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};
const mapStateToProps = state => ({
  hide: state.mainPane.hide
});
export default connect(mapStateToProps, { addMessage })(ChatInput);
