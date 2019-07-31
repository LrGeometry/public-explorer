import firebase from "../firebase.js";
import { GET_ASSET, GET_ASSET_IS_LOADING, GET_ASSET_ERROR } from "./Types";
import { flatten, reformatData } from "../utils/useFetch";

export const getAssets = assets => ({
  type: GET_ASSET,
  assets
});

export const assetIsLoading = bool => ({
  type: GET_ASSET_IS_LOADING,
  isLoading: bool
});

export const assetLoadingError = error => ({
  type: GET_ASSET_ERROR,
  error
});

export const getAllAssets = () => dispatch => {
  const rootRef = firebase.database().ref();
  rootRef
    .child("assets")
    .once("value")
    .then(snapshot => {
      dispatch(assetIsLoading(false));
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
      dispatch(getAssets(newData));
    })
    .catch(err => console.log("err", err.message));
};
