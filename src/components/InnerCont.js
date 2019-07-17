import React from "react";

import pic from "../assets/copy-regular.svg";

const InnerContent = ({ picVal, val }) => {
  function copyToClipboard(data) {
    navigator.clipboard.writeText(data).then(() => alert("text copied"));
  }

  let text =
    val && val.length > 12
      ? val.substring(0, 10) +
        "...." +
        val.substring(val.length - 9, val.length)
      : val;

  return (
    <div className="d-flex flex-row" style={{ backgroundColor: "#E6E5F5" }}>
      <div className="flex1  justify-content-center  align-items-center">
        <img style={{ height: "12px" }} src={picVal} alt="pics" />
      </div>
      <div className="d-flex flex4 justify-content-center align-items-center">
        <div className="justify-content-center">
          <p className="small-text no-space bold-small">{text} </p>
        </div>
        <div>
          <a href="/#" onClick={() => copyToClipboard(val)}>
            <img
              className="ml-2"
              style={{ height: "12px" }}
              src={pic}
              alt="pics"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InnerContent;
