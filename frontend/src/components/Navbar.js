import React from "react";

const Navbar = () => {
  return (
    <div className="row">
      <div className="col s12 m8 offset-m2 blue pinned-nav">
        <div className=" dp left">
          <img
            src="img/dp.jpg"
            alt=""
            width="50"
            height="50"
            className="circle "
          />
        </div>
        <div className="center">
          <h5 className="white-text">MMUST Assistant</h5>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
