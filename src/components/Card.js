import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
// import Carousel from "nuka-carousel";
// import SVG from "./svg";
import pic from "../assets/copy-regular.svg";
import camera from "../assets/camera-solid.svg";
import circle from "../assets/circle-solid.svg";
import file from "../assets/file-alt-solid.svg";
import info from "../assets/info-circle-solid.svg";
import photos from "../assets/photos.svg";
import herc from "../assets/herc_flat.png";

const InnerContent = ({ picVal, val }) => {
  let text =
    val && val.length > 12
      ? val.substring(0, 10) +
        "...." +
        val.substring(val.length - 9, val.length)
      : val;

  return (
    <div className="d-flex flex-row" style={{ backgroundColor: "#E6E5F5" }}>
      <div className="flex1  justify-content-center  align-items-center">
        <img style={{ height: "12px" }} src={picVal} />
      </div>
      <div className="d-flex flex4 justify-content-center align-items-center">
        <div className="justify-content-center">
          <p className="small-text no-space">{text} </p>
        </div>
        <div>
          <img className="ml-2" style={{ height: "12px" }} src={pic} />
        </div>
      </div>
    </div>
  );
};

const UpText = ({ left, right }) => (
  <div className="d-flex flex-row ">
    <span className="col-md-4 no-space">
      <p className="small-text no-space mt-1"> {left}: </p>
    </span>
    <span className="col-md-7 no-space ">
      <p className="small-text bold no-space mt-1"> {right} </p>
    </span>
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
              {/* <SVG /> */}
              {/* <i
                className="fas fa-copy"
                style={{
                  color: "red"
                }}
              /> */}
              <img
                style={{ height: "12px" }}
                src={pic}
                // src="https://via.placeholder.com/150"
                alt="testo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

class Card extends React.Component {
  render() {
    const {
      i,
      x,
      y,
      //  rot, scale, trans,
      bind,
      data
    } = this.props;
    const { ipfsHash, factomEntry, dTime, ediT, chain, price } = data[i];

    return (
      <animated.div
        className="flex flex1"
        key={i}
        style={{
          backgroundColor: "#4fD0e9",
          // transform: `translate3d("${rnd(0, 4)}px", "${rnd(-10, -20)}px", "${rnd(0, 4)}px")`
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          style={{
            transform: `translate(-1px, -2px) scale(1) rotate(0deg)`
            // transform: `translate(-1px, -2px) scale(1) rotate(${i}deg)`
            // transform: interpolate([rot, scale], trans)
            // transform: "perspective(1500px) rotateX(30deg) rotateY(- 0.004deg) rotateZ(-0.04deg) scale(1.1)"
          }}
          className="flex flex1 border rounded-lg flex-column no-gutters no-space"
          {...bind(i)}
          style={{
            margin: 0,
            padding: 0
          }}
        >
          <div
            className="col-md-12 col-sm-12 no-space d-flex flex1 flex-column"
            style={
              {
                // backgroundColor: "green"
                // height: "10%"
                // width: ""
              }
            }
          >
            <div
              className="d-flex flex1"
              style={{
                // paddingTop: "50%",
                justifyContent: "center",
                alignItems: "center",
                height: "10%",
                width: "100%",
                backgroundColor: "#01033C"
              }}
            >
              <p
                className="no-space"
                style={{
                  textAlign: "center",
                  color: "#FFFFFF"
                }}
              >
                Tracking Asset: XXXXXX{" "}
              </p>
            </div>

            <div
              className=" ml-3 mr-3 d-flex flex7 flex-column"
              style={{
                // backgroundColor: "red"
                backgroundColor: "#FFFEFF"
              }}
            >
              <div className="d-flex flex-column flex1 mt-1">
                <UpText left="Touchpoint" right="ORCHARD" />
                <UpText left="Date" right="July 10, 2019" />
                <UpText left="Time" right="07:26:54" />
              </div>

              <div
                className=" d-flex flex-column flex5 mt-4"
                style={{
                  backgroundColor: "#E4E4FA",
                  // height: "100px",
                  border: "3px solid ",
                  borderColor: "yellow",
                  marginBottom: "10px"
                }}
              >
                <div
                  className="ml-2 mt-2"
                  onClick={() =>
                    window.open(
                      `https://explorer.factom.com/chains/${chain}`,
                      "_blank"
                    )
                  }
                >
                  <p className="fs-14"> click to view photo </p>
                </div>
                <div className="flex1 justify-content-center align-items-center">
                  <img style={{ height: "70px" }} src={photos} />
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#F4F1FC"
                }}
                className="d-flex flex6 flex-column "
              >
                <div className="pt-1 ml-2">
                  <p className="small-text no-space"> Copy IPFS HASH </p>
                </div>
                <div
                  className="d-flex  flex1 flex-column justify-content-center "
                  style={{ marginBottom: "5%" }}
                >
                  <div className="mt-1">
                    <InnerContent picVal={camera} val={chain} />
                  </div>
                  <div className="mt-1">
                    <InnerContent picVal={info} val={factomEntry} />
                  </div>
                  <div className="mt-1">
                    <InnerContent picVal={circle} val={ediT} />
                  </div>
                  <div className="mt-1">
                    <InnerContent picVal={file} val={ipfsHash} />
                  </div>
                </div>
              </div>
              <div className="d-flex mt-2 mb-2 flex1 align-items-center  align-self-center">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() =>
                    window.open(
                      `https://explorer.factom.com/chains/${chain}`,
                      "_blank"
                    )
                  }
                >
                  View factom chain
                </button>
              </div>
            </div>

            {/* <div className="d-flex flex1 align-items-center  align-self-center">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() =>
                  window.open(
                    `https://explorer.factom.com/chains/${chain}`,
                    "_blank"
                  )
                }
              >
                View factom chain
              </button>
            </div> */}
            <div
              className="d-flex flex1"
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                backgroundColor: "#01033C"
              }}
            >
              <div className="ml-2 flex1">
                <img
                  src={herc}
                  alt="herc-pics"
                  style={{
                    height: "20px",
                    width: "40px"
                  }}
                />
              </div>
              <div class="ml-1 flex6">
                <p
                  className="no-space fs-12 "
                  style={{
                    textAlign: "center",
                    color: "#FFFFFF"
                  }}
                >
                  0.00057 HERC = 0.000001655 USD
                </p>
              </div>
            </div>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  distance: PropTypes.string,
  text: PropTypes.string,
  pics: PropTypes.array
};

export default Card;
