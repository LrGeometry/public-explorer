import React, { Fragment } from "react";
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

import new_herc from "../assets/herc_flat_tiny.png";

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
  const logo = newData && newData[i] && newData[i].Logo;

  const chainId =
    newData && newData[i] && newData[i].hashes && newData[i].hashes.chainId;
  const dat = newData && newData[i] && newData[i].data;

  console.log("data[[", newData[i]);

  return (
    <animated.div
      className="flex flex1 root justify-content-center align-items-center"
      key={i}
      style={{
        backgroundColor: "#4fD0e9",
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
    >
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
                onClick={() => window.open(`${logo}`, "_blank")}
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
              <div className="pt-1 ml-2">
                <p className="small-text no-space"> Copy IPFS HASH </p>
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
                <Fragment>
                  {!(dat && dat.ediT) ? null : (
                    <div className="mt-1">
                      <InnerContent picVal={circle} val={dat && dat.ediT} />
                    </div>
                  )}
                </Fragment>

                <div className="mt-1">
                  <InnerContent picVal={file} val={ipfsHash} />
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
              height: "50px",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              backgroundColor: "#131440"
            }}
          >
            <div className="ml-2 flex1">
              <img
                src={new_herc}
                alt="herc-pics"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain"
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
