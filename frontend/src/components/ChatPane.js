import React from "react";
import { connect } from "react-redux";
import CalloutReceive from "./CalloutReceive";
import CalloutSend from "./CalloutSend";
import { hideInputPane } from "../actions/MainPane";
import kafka from "kafka-node";
const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });

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
            else return <CalloutReceive key={m.id} content={m.content} />;
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
