import React from "react";
import moment from "moment";

const CalloutReceive = ({ content }) => {
  return (
    <div className=" callout callout-receive callout-right text-pane">
      <p> {content}</p>
      <span className="right  callout-footer">{`Alita ${moment().fromNow()}`}</span>
    </div>
  );
};

export default CalloutReceive;
