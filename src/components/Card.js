import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { animated, interpolate } from "react-spring/hooks";
// import Carousel from "nuka-carousel";

import InnerComp, { UpText } from "./innerComp";
import InnerContent from "./innerCont";

import camera from "../assets/camera-solid.svg";
import circle from "../assets/circle-solid.svg";
import file from "../assets/file-alt-solid.svg";
import info from "../assets/info-circle-solid.svg";
import photos from "../assets/photos.svg";
import herc from "../assets/herc_flat.png";
import herc2 from "../assets/herc2.png";

class Card extends React.Component {
  render() {
    const {
      i,
      x,
      y,
      newData,

      Name,
      chainId,
      ipfsHash,
      transactions,
      //  rot, scale, trans,
      bind,
      data
    } = this.props;

    const { factomEntry, dTime, chain, price } = data[i];

    const header = transactions && transactions[0] && transactions[0].header;
    const dat = transactions && transactions[0] && transactions[0].data;
    const ediT =
      transactions &&
      transactions[0] &&
      transactions[0].data &&
      transactions[0].ediT;
    const timestamp =
      transactions && transactions[0] && transactions[0].timestamp;

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
            // maxWidth: "350px",
            // height: "630px",

            // display: "flex",
            // flexFlow: "column",
            // maxWidth: "600px",
            // height: "100%",
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
                backgroundColor: "#131440"
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
                <UpText left="Touchpoint" right={Name} />
                <UpText left="Date" right={header && header.dTime} />
                <UpText left="Time" right={moment().format("LTS")} />
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
                  {/*  */}
                  <div className="mt-1">
                    <InnerContent picVal={camera} val={chainId} />
                  </div>
                  {/*  */}
                  <div className="mt-1">
                    <InnerContent
                      picVal={info}
                      val={header && header.factomEntry}
                    />
                  </div>
                  {/*  */}
                  <div className="mt-1">
                    <InnerContent picVal={circle} val={dat && dat.ediT} />
                  </div>

                  {/* /done */}
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
                backgroundColor: "#131440"
              }}
            >
              <div className="ml-1 ">
                <img
                  src={herc2}
                  alt="herc-pics"
                  style={{
                    height: "40px",
                    width: "40px"
                  }}
                />
              </div>
              <div className="ml-1 flex6">
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
