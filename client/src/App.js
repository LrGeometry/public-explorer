import React, { useMemo } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Deck from "./screens/Deck";
import ChildDeck from "./screens/ChildDeck";
import Assets from "./screens/Assets";
import Header from "./components/Header";

import { useFetch } from "./utils/useFetch";
import { AppContext } from "./AppContext";

import "./styles/mainStyle.css";

const App = () => {
  const data = useFetch();

  const datum = useMemo(() => data, [data]);
  return (
    <AppContext.Provider value={datum}>
      <Router>
        <Header />
        <Route path="/" exact component={Deck} />
        <Route path="/assets" exact component={Assets} />
        <Route exact path="/assets/:id" component={ChildDeck} />
      </Router>
    </AppContext.Provider>
  );
};

export default App;
