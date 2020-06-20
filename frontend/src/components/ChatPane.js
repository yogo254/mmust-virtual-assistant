import React from "react";
import { connect } from "react-redux";
import CalloutReceive from "./CalloutReceive";
import CalloutSend from "./CalloutSend";
import { hideInputPane } from "../actions/MainPane";

const ChatPane = ({ msgs, hideInputPane }) => {
  return (
    <div className="row">
      <div
        onClick={e => hideInputPane()}
        className="col s12 m8 offset-m2 chatpane"
      >
        {msgs.map(m => {
          if (m.contentType === "text") {
            if (m.owner === "user")
              return <CalloutSend key={m.id} content={m.content} />;
            else
              return (
                <CalloutReceive
                  key={m.id}
                  content={m.content}
                  responceObject={m.responceObject}
                />
              );
          }
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  msgs: state.messages
});

export default connect(mapStateToProps, { hideInputPane })(ChatPane);
