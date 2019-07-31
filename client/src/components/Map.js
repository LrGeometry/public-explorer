import React from "react";
import styled from "styled-components";
import close from "../assets/close.svg";

import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const Style = styled.div`
  position: fixed;
  left: 30%;
  top: 16%;
  z-index: 100000;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 12px;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 480px) {
    /* For mobile phones: */
    left: 5%;
    width: 90%;
  }
  height: 70vh;
  width: 44%;

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
  height: "100%"
};

const apiKey = process.env.REACT_APP_GOOGLE_MAP_APIKEY;

class MapComp extends React.Component {
  state = {
    showInfoWindow: false
  };
  handleMouseOver = e => {
    console.log("kdkfjdjfj");
    this.setState({
      showInfoWindow: true
    });
  };

  handleMouseExit = e => {
    this.setState({
      showInfoWindow: false
    });
  };

  render() {
    const { toggleMap, coordinates } = this.props;
    const { latitude, longitude } = coordinates;

    const { showInfoWindow } = this.state;
    return (
      <Style>
        <div className="img" onClick={toggleMap}>
          <img className="image" src={close} alt="close" />
        </div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: latitude + 0.003, lng: longitude + 0.003 }}
        >
          <Marker
            position={{ lat: latitude, lng: longitude }}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseExit}
          >
            {showInfoWindow && (
              <InfoWindow>
                <h5> hhhggghghg</h5>
              </InfoWindow>
            )}
          </Marker>
        </Map>
      </Style>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey
})(MapComp);
