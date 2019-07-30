import React, { Fragment } from "react";

import pic from "../assets/copy-regular.svg";

export const UpText = ({ left, toggleMap, right, coordinates }) => (
  <div className="d-flex flex-row ">
    <span className="col-md-4 no-space">
      <p className="small-text no-space mt-1"> {left}: </p>
    </span>
    <Fragment>
      {coordinates ? (
        <span className="col-md-7 no-space " onClick={toggleMap}>
          <p
            className="small-text bold no-space mt-1"
            style={{
              cursor: "pointer"
            }}
          >
            {" "}
            View on Map{" "}
          </p>
        </span>
      ) : (
        <span className="col-md-7 no-space ">
          <p className="small-text bold no-space mt-1"> {right} </p>
        </span>
      )}
    </Fragment>
  </div>
);

const InnerComp = ({ data1, data2 }) => {
  function copyToClipboard(data) {
    navigator.clipboard.writeText(data).then(() => alert("text copied"));
  }

  let newData2 =
    data2 && data2.length > 12
      ? data2.substring(0, 10) +
        "...." +
        data2.substring(data2.length - 9, data2.length)
      : data2;
  return (
    <div className="mt-3 border rounded-lg my-10">
      <div style={{ backgroundColor: "#e2e6f9", height: "50px" }}>
        <div className="pl-3 pt-1 no-space">
          <p className="no-space" style={{ fontSize: 9, color: "#cbccd2" }}>
            {data1}
          </p>
        </div>
        <div className="d-flex flex-row pl-3 pt-2 flex1 flex-row no-space">
          <div className="flex flex1 jc">
            <p style={{ fontSize: 8, color: "#091140" }}>{newData2}</p>
          </div>

          <div className="flex flex1 jc no-space">
            <a href="/#" onClick={() => copyToClipboard(data2)}>
              <img style={{ height: "12px" }} src={pic} alt="testo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerComp;
