import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { animated, interpolate } from "react-spring/hooks";

import { UpText } from "./InnerComp";
import InnerContent from "./InnerCont";

import camera from "../assets/camera-solid.svg";
import circle from "../assets/circle-solid.svg";
import file from "../assets/file-alt-solid.svg";
import info from "../assets/info-circle-solid.svg";
import photos from "../assets/photos.svg";

import herc from "../assets/herc_flat.png";
import herc2 from "../assets/herc2.png";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon
} from "react-share";

const Card = ({ i, x, y, rot, scale, trans, newData, bind, data, herc }) => {
  const header = newData && newData[i] && newData[i].header;
  const Name = newData && newData[i] && newData[i].Name;
  const ipfsHash =
    newData && newData[i] && newData[i].hashes && newData[i].hashes.ipfsHash;

  const chainId =
    newData && newData[i] && newData[i].hashes && newData[i].hashes.chainId;
  const dat = newData && newData[i] && newData[i].data;

  return (
<<<<<<< HEAD
    <animated.div
      className="flex flex1 root justify-content-center align-items-center"
      key={i}
      style={{
        backgroundColor: "#4fD0e9",
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
    >
=======
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
      newData,

      Name,
      chainId,
      ipfsHash,
      transactions,
      //  rot, scale, trans,
      bind,
      data
    } = this.props;

    const { factomEntry, dTime, ediT, chain, price } = data[i];
    // console.log("kdks", newData);
    // const Name = newData[i] && newData[i].Name;

    //  timestamp, data: nedata, header = transactions[Math.random()];

    // const transactions = newData[i] && newData[i].transactions;
    console.log("kk", i);
    // const { Name, hercId, Logo, hashes, transactions } = newData[i];
    // console.log("transactions", transactions);

    return (
>>>>>>> 538b71e81173b1c2cfc3c7e6e53e17340b9b3d35
      <animated.div
        style={{
          // transform: interpolate([rot, scale], trans),
          margin: -4,
          padding: -4
        }}
        className="root2 flex flex1 border rounded-lg flex-column no-gutters no-space"
        {...bind(i)}
      >
        <div className="col-md-12 col-sm-12 no-space d-flex flex1 flex-column">
          <div
            className="d-flex flex1"
            style={{
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
              Tracking Asset: {Name}
            </p>
          </div>

          <div
            className=" ml-3 mr-3 d-flex flex7 flex-column"
            style={{
              backgroundColor: "#FFFEFF"
            }}
          >
            <div className="d-flex flex-column flex1 mt-1">
              <UpText left="Touchpoint" right={Name} />
              <UpText left="Date" right={header && header.dTime} />
              <UpText left="Time" right={moment().format("LTS")} />
            </div>
            <div
              className=" d-flex flex-column flex5 mt-3"
              style={{
                backgroundColor: "#E4E4FA",
                border: "3px solid ",
                borderColor: "yellow",
                marginBottom: "10px"
              }}
            >
              <div
                className="ml-2 mt-2"
                onClick={() =>
                  window.open(
                    `https://gateway.ipfs.io/ipfs/${ipfsHash}`,
                    "_blank"
                  )
                }
              >
                <p className="fs-14"> click to view photo </p>
              </div>
              <div className="flex1 justify-content-center align-items-center">
                <img style={{ height: "50px" }} src={photos} alt="pics" />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#F4F1FC"
              }}
              className="d-flex flex6 flex-column "
            >
<<<<<<< HEAD
              <div className="pt-1 ml-2">
                <p className="small-text no-space"> Copy IPFS HASH </p>
=======
              <div className="d-flex flex-column flex1 mt-1">
                <UpText left="Touchpoint" right={Name} />
                <UpText left="Date" right="July 10, 2019" />
                <UpText left="Time" right="07:26:54" />
>>>>>>> 538b71e81173b1c2cfc3c7e6e53e17340b9b3d35
              </div>
              <div
                className="d-flex  flex1 flex-column justify-content-center "
                style={{ marginBottom: "5%" }}
              >
                <div className="mt-1">
                  <InnerContent picVal={camera} val={chainId} />
                </div>

                <div className="mt-1">
                  <InnerContent
                    picVal={info}
                    val={header && header.factomEntry}
                  />
                </div>

                <div className="mt-1">
                  <InnerContent picVal={circle} val={dat && dat.ediT} />
                </div>
<<<<<<< HEAD

                <div className="mt-1">
                  <InnerContent picVal={file} val={ipfsHash} />
=======
                <div
                  className="d-flex  flex1 flex-column justify-content-center "
                  style={{ marginBottom: "5%" }}
                >
                  <div className="mt-1">
                    <InnerContent picVal={camera} val={chainId} />
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
>>>>>>> 538b71e81173b1c2cfc3c7e6e53e17340b9b3d35
                </div>
              </div>
            </div>
            <div className="d-flex flex1 mt-3 justify-content-center align-items-center">
              <FacebookShareButton
                url="facebook.com"
                quote="herc"
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={25} round />
              </FacebookShareButton>

              <TwitterShareButton
                url="twitter.com"
                title="herc"
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={25} round />
              </TwitterShareButton>

              <WhatsappShareButton
                url="web.whatsapp.com"
                title="herc"
                separator=":: "
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={25} round />
              </WhatsappShareButton>
            </div>

            <div className="d-flex mt-1 mb-2 flex1 align-items-center  align-self-center">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() =>
                  window.open(
                    `https://explorer.factom.com/chains/${chainId}`,
                    "_blank"
                  )
                }
              >
                View factom chain
              </button>
            </div>
          </div>

          <div
            className="d-flex flex1"
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              backgroundColor: "#131440"
            }}
          >
            <div className="ml-3 ">
              <img
                src={herc2}
                alt="herc-pics"
                style={{
                  height: "40px",
                  width: "40px"
                }}
              />
            </div>
            <div className="flex6">
              <p
                className="no-space fs-10  ml-2"
                style={{
                  fontSize: "10px",
                  // textAlign: "center",
                  color: "#FFFFFF"
                }}
              >
                0.00057 HERC = {herc * (header && header.price)} USD
              </p>
            </div>
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  distance: PropTypes.string,
  text: PropTypes.string,
  pics: PropTypes.array
};

export default Card;
