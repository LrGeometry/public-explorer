import React from "react";
import styled from "styled-components";
import close from "../assets/close.svg";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const Style = styled.div`
  position: fixed;
  left: 5vh;
  top: 16%;
  z-index: 100000;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 12px;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    left: 75vh;
    height: 70vh;
    width: 100%;
  }
  height: 70vh;
  width: 100%;

  .img {
    margin-top: 10px;
    margin-left: 10px;
  }
  .image {
    height: 40px;
    width: 40px;
  }
`;

const mapStyles = {
  width: "100%",
  height: "80%"
};

const apiKey = process.env.REACT_APP_GOOGLE_MAP_APIKEY;

class MapComp extends React.Component {
  render() {
    const { toggleMap, coordinates } = this.props;
    const { latitude, longitude } = coordinates;
    return (
      <Style>
        <div className="img" onClick={toggleMap}>
          <img className="image" src={close} alt="close" />
        </div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: latitude, lng: longitude }}
        />
        <Marker position={{ lat: latitude, lng: longitude }} />
      </Style>
    );
  }
}

export default GoogleApiWrapper({
  apiKey
})(MapComp);
