import React, {useContext} from "react";
import AssetComp from  "../components/AssetComp";
import Spinner from "../components/Spinner";

import { AppContext } from "../AppContext";

const Assets = () => {
 let {value,loading,info} = useContext(AppContext);

 if(loading){
      return (
        <Spinner
          size={120}
          spinnerColor={"#333"}
          spinnerWidth={2}
          visible={true}
        />
    );
 }

  value.length = 8;
  return(
      <div className="d-flex flex-column mt-2">
        <div className ="mt-3">
        {
          value.map((c,i)=> (
               <AssetComp 
                 name={c.Name}
                 id={c.hercId}
               />
          ))
        }
        </div>
      </div>

  )

}

export default Assets;
