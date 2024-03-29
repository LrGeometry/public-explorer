import React from "react";
import styled from "styled-components";

const ParentDiv = styled.div`
  box-shadow: 0.1px 0.1px 0.5px 0.1px;
`;

const Title = () => (
  <div className="flex-row flex1 ml-2 mt-10">
    <span className="flex1 t-c o-gutter no-spacing no-space">
      <p className="no-gutter"> Asset Name </p>
    </span>
    <span className="flex1 t-c o-gutter no-spacing no-space">
      <p className="no-gutter"> Herc ID </p>
    </span>
  </div>
);

const Assets = ({ name, id }) => (
  <ParentDiv className=" col-sm-10 col-10 t-c">
    <a href={`/assets/${id}`} style={{ textDecoration: "none" }}>
      <div className="mt-2">
        <Title />
      </div>
      <div className="flex-row flex1 ml-2 no-gutter no-spacing no-space">
        <span className="flex1 t-c o-gutter no-spacing no-space">
          <p className="bold-small fs-15"> {name} </p>{" "}
        </span>
        <span className="flex1 t-c o-gutter no-spacing no-space">
          <p className="bold-small fs-15"> {id}</p>
        </span>
      </div>
    </a>
  </ParentDiv>
);

export default Assets;
