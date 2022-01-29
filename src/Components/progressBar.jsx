import React, { Component } from "react";

const ProgressBar = () => {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow={99}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: "99%" }}
      >
        Loading...
      </div>
    </div>
  );
};

export default ProgressBar;
