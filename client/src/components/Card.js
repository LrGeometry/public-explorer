import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { animated, interpolate } from "react-spring/hooks";

import { UpText } from "./InnerComp";
import InnerContent from "./InnerCont";
import MediaShareModal from "./MediaShareModal";

import camera from "../assets/camera-solid.svg";
import circle from "../assets/circle-solid.svg";
import file from "../assets/file-alt-solid.svg";
import info from "../assets/info-circle-solid.svg";
import share from "../assets/share.svg";

import photos from "../assets/photos.svg";

import herc from "../assets/herc_flat.png";
import herc2 from "../assets/herc2.png";

import new_herc from "../assets/herc_flat_tiny.png";

const Card = ({ i, x, y, rot, scale, trans, newData, bind, data, herc }) => {
  const timeStamp = parseInt(newData && newData[i] && newData[i].timestamp);

  const header = newData && newData[i] && newData[i].header;
  const hercId = newData && newData[i] && newData[i].hercId;
  const Name = newData && newData[i] && newData[i].Name;
  const coordinates = newData && newData[i] && newData[i].coordinates;
  const ipfsHash =
    newData && newData[i] && newData[i].hashes && newData[i].hashes.ipfsHash;
  const logo = newData && newData[i] && newData[i].Logo;

  const chainId =
    newData && newData[i] && newData[i].hashes && newData[i].hashes.chainId;
  const dat = newData && newData[i] && newData[i].data;

  const priceToShow = (herc * (header && header.price)).toFixed(9);

  const quote = `View ${Name}'s lifecycle on HERC Public Blockchain Explorer! ${`https://explorer.herc.one/assets/${hercId}`} You can begin your value chain legend here: https://herc.one/getstarted`;

  const emailTitle = `View  ${Name}'s Supply Chain on HERC!`;
  const emailQuote = `Use the  link  ${`https://explorer.herc.one/assets/${hercId}`} to follow the supply chain of ${Name}`;

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(!show);
  };

  return (
    <animated.div
      className="flex flex1 root  flex-column justify-content-center align-items-center"
      key={i}
      style={{
        backgroundColor: "#4fD0e9",
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${0}px,0)`)
        // transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
    >
      <animated.div
        className="flex1"
        style={{
          // transform: interpolate([rot, scale], trans)
          margin: -4,
          padding: -4
        }}
        className="root2 flex flex9 border rounded-lg flex-column no-gutters no-space "
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
              <UpText left="Touchpoint" right={coordinates} />
              <UpText left="Date" right={header && header.dTime} />
              <UpText left="Time" right={moment(timeStamp).format("H:mm:ss")} />
            </div>
            <div
              className=" d-flex flex-column flex5 mt-3"
              onClick={() => window.open(`${logo}`, "_blank")}
              style={{
                backgroundColor: "#E4E4FA",
                border: "3px solid ",
                borderColor: "yellow",
                marginBottom: "10px"
              }}
            >
              <div className="ml-2 mt-1">
                <p className=""> Click to view photo </p>
              </div>
              <div className="flex1 justify-content-center">
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
                <p className="no-space"> Copy IPFS HASH </p>
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
                  display: "inline",
                  fontSize: "13px",
                  // textAlign: "center",
                  color: "#FFFFFF"
                }}
              >
                0.00057 HERC = {priceToShow === 0 ? 0 : priceToShow}
                USD
              </p>
            </div>
          </div>
        </div>
      </animated.div>
      <div
        className="mt-2 flex1 justify-content-center align-items-center"
        onClick={() => handleClose()}
      >
        <img
          style={{ height: "50px", color: "#131440" }}
          src={share}
          alt="pics"
        />
      </div>
      <MediaShareModal
        emailTitle={emailTitle}
        emailQuote={emailQuote}
        quote={quote}
        show={show}
        handleClose={handleClose}
      />
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
