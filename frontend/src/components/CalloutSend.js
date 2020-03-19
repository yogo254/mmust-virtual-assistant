import React from "react";
import moment from "moment";

const CalloutSend = ({ content }) => {
  return (
    <div className=" callout callout-send callout-left text-pane">
      <p>{content}</p>
      <span className="right  callout-footer">{`You ${moment().fromNow()}`}</span>
    </div>
  );
};

export default CalloutSend;
