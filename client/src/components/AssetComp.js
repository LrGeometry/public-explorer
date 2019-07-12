import React from "react";


const Title = () => (
     <div className="flex-row flex1 ml-2 mt-10">
          <span className ="flex1 t-c o-gutter no-spacing no-space"> 
           <p className="no-gutter"> Asset Name </p> 
           </span>
          <span className ="flex1 t-c o-gutter no-spacing no-space"> 
          <p className="no-gutter"> Herc ID </p>
           </span>
    </div>
);

const Assets = ({name , id}) => (
  <div>
  <div>
      <Title />
      </div>
        <div className="flex-row flex1 ml-2 no-gutter no-spacing no-space">
          <span className ="flex1 t-c o-gutter no-spacing no-space">  <p> {name} </p> </span>
          <span className ="flex1 t-c o-gutter no-spacing no-space"> <p> {id}</p> </span>
        </div>
  </div>

)

export default Assets;
