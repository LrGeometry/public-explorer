import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";

const InnerComp = () => (
  <div className="mt-3 border rounded-lg" >
    <div style={{ backgroundColor: "#e2e6f9" }}>
      <div className="pl-3 pt-2">
        <p style={{ fontSize: 11, color: "#cbccd2" }}> factory entity </p>
      </div>
      <div className="d-flex flex-row pl-3 flex1 flex-row">
        <div className="flex flex1 jc">
          <p style={{ fontSize: 14, color: "#091140" }}> date 33</p>
        </div>

        <div className="flex flex1 jc">
          <img style={{ height: "15px" }} src="https://via.placeholder.com/150" alt="testo" />
        </div>
      </div>
    </div>
  </div>
);

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { name, age, distance, text, pics } = data[i];

    return (
      <animated.div
        className="flex flex1"
        key={i}
        style={{
          backgroundColor: "#4fD0e9",
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          style={{
            transform: "translate(-1px, -2px) scale(1) rotate(2deg)"
            // transform: interpolate([rot, scale], trans)
            // transform: "perspective(1500px) rotateX(30deg) rotateY(- 0.004deg) rotateZ(-0.04deg) scale(1.1)"
          }}
          className="flex border rounded-lg"
          {...bind(i)}>
          <div
            className="d-flex flex-column  ml-3 mr-3 mt-5 mb-5 flex flex1">
            <div className="d-flex flex-column flex5">

              <InnerComp />
              <InnerComp />
              <InnerComp />
            </div>

            <div className="d-flex align-items-center flex4">
              <button style={{ width: "100%" }} type="button" className="btn btn-primary">View factom chain</button>
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