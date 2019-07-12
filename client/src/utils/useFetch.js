import { useEffect, useState } from "react";
import firebase from "../firebase.js";

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

    return { value, loading,info };

};