import React from "react";

const ResponceObject = ({ responce }) => {
  let bank = responce.bank;
  return (
    <div>
      {bank ? (
        <p>{`${responce.bank},Account No: ${responce.account},  ${responce.branch}`}</p>
      ) : null}
    </div>
  );
};

export default ResponceObject;
