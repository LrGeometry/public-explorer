import { useEffect, useState } from "react";
import firebase from "../firebase.js";

export const flatten = list => list.flat();

export const reformatData = list => {
  if (list === undefined) return [];
  return list.reduce((arr, a, i) => {
    let ret = a.transactions.map((c, ii) => {
      delete a.transactions;
      return Object.assign(c, a);
    });
    arr.push(ret);
    return arr;
  }, []);
};

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const rootRef = firebase.database().ref();
    rootRef
      .child("assets")
      .once("value")
      .then(snapshot => {
        setLoading(false);
        let storedValue = [];

        snapshot.forEach(asset => {
          if (asset.toJSON().Public) {
            let transact = [];
            const dAsset = asset.toJSON();
            if (dAsset.transactions !== undefined) {
              Object.keys(dAsset.transactions).forEach(key => {
                let value = dAsset.transactions[key];
                value.timestamp = key;
                transact.push(value);
                return value;
              });
              dAsset.transactions = transact;
            }

            storedValue.push(dAsset);
          }
        });

        const withoutTrans = storedValue.filter(c => c.transactions);
        const newData = flatten(reformatData(withoutTrans));
        setValue(newData);
      })
      .catch(err => console.log("err", err.message));
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
  }, [herc]);
  return herc;
};
