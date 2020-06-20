import React from "react";
import moment from "moment";
import ResponceObject from "./ResponceObject";

const CalloutReceive = ({ content, responceObject }) => {
  return (
    <div className=" callout callout-receive callout-right text-pane">
      <p> {content}</p>
      <div>
        {responceObject.map(res => {
          return <ResponceObject responce={res} />;
        })}
      </div>
      <span className="right  callout-footer">{`Alita ${moment().fromNow()}`}</span>
    </div>
  );
};

export default CalloutReceive;
