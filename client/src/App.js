import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ChildDeck from "./screens/ChildDeck";
import Assets from "./screens/Assets";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import Deck from "./screens/Deck";

import { getAllAssets } from "../src/actions/Asset";

import "./styles/mainStyle.css";

const App = () => {
  const dispatch = useDispatch();

  const as = useSelector(state => state.assets);
  const assets = useSelector(({ assets }) => assets);

  useEffect(() => {
    if (assets.value.length === 0) {
      dispatch(getAllAssets());
    }
  }, [assets.value.length, dispatch]);

  if (assets.value.length === 0) {
    return (
      <div>
        <Header />
        <Spinner
          size={120}
          spinnerColor={"#333"}
          spinnerWidth={2}
          visible={true}
        />
      </div>
    );
  }
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Deck} />
      <Route path="/assets" exact component={Assets} />
      <Route exact path="/assets/:id" component={ChildDeck} />
    </Router>
  );
};

export default App;
