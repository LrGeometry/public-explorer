import { useEffect, useContext, useState } from "react";
import { AppContext } from "../AppContext";
import firebase from "../firebase.js";

// export const useFetch = () => {
//   const data = useContext(AppContext);
//   if (data !== null) {
//     return data;
//   }
//   return useFetchHooks();
// };

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    var paramFromURL = 364;
    const rootRef = firebase.database().ref();
    rootRef
      .child("assets")
      .once("value")
      .then(snapshot => {
        setLoading(false);
        let storedValue = [];
        snapshot.forEach(asset => {
          // const assset = asset.toJSON();

          // if (asset.toJSON().Public === true) {
          //   console.log("ddjdj");
          //   storedValue.push(asset.toJSON());
          //   console.log("real", asset.toJSON());
          // } else {
          //   console.log("kfkfkf");
          // }
          storedValue.push(asset.toJSON());
          if (asset.toJSON().hercId === paramFromURL) {
            setInfo(asset.toJSON());
            // check if asset has any transaction history
            if (asset.toJSON().transactions) {
              // return an iterable list of transactions
            } else {
              // return ” no transaction history”
            }
            // return asset
          } else {
            // return “no asset matched given hercId”
          }
        });

        setValue(storedValue);
      });
  }, []);

  return { value, loading, info };
};

export const useFetch2 = () => {
  const [herc, setHerc] = useState(null);
  useEffect(() => {
    fetch("https://chart.anthemgold.com/service-1.0-SNAPSHOT/MULTIPRICE")
      .then(response => response.json())
      .then(data => {
        const hercUSDV = data.find(c => c.symbol === "HERCUSDV");
        setHerc(hercUSDV.h);
      })
      .catch(err => {});
  }, []);
  return herc;
};
