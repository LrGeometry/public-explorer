import React, { useContext } from "react";
import AssetComp from "../components/AssetComp";
import Spinner from "../components/Spinner";

import { AppContext } from "../AppContext";

const Assets = () => {
  const data = useContext(AppContext);

  // const { value, loading, info } = data.dData;
  const { value, loading, info } = data;

  //Remove duplicate
  const unique = Array.from(new Set(value.map(a => a.hercId))).map(id => {
    return value.find(a => a.hercId === id);
  });

  if (loading) {
    return (
      <Spinner
        size={120}
        spinnerColor={"#333"}
        spinnerWidth={2}
        visible={true}
      />
    );
  }
  return (
    <div className="d-flex flex-column mt-5 ">
      <div className="mt-5 justify-content-center align-items-center ml-3 mb-5 ">
        {unique.map((c, i) => (
          <div className=" mt-2">
            <AssetComp name={c.Name} id={c.hercId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assets;
