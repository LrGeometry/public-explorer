import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
// import Carousel from "nuka-carousel";

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
              <img
                style={{ height: "12px" }}
                src="https://via.placeholder.com/150"
                alt="testo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// function rnd(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

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
          className="flex border rounded-lg"
          {...bind(i)}
        >
          <div className="d-flex flex-column  ml-3 mr-3 mt-2 mb-5 flex flex1">
            <div className="d-flex flex-column flex5">
              <InnerComp data1="created" data2={dTime} />
              <InnerComp data1="factom chain" data2={chain} />
              <InnerComp data1="factom entry" data2={factomEntry} />
              <InnerComp data1="core-properties" data2={ipfsHash} />
              <InnerComp data1="edit IPFS" data2={ediT} />
              <InnerComp data1="price" data2={price} />
            </div>

            <div className="d-flex align-items-center flex1 align-self-center">
              <button type="button" className="btn btn-warning">
                View factom chain
              </button>
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
