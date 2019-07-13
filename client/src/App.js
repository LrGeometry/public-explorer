import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Deck from "./screens/Deck";
import Assets from "./screens/Assets";
import Header from "./components/Header";

import { useFetch } from "./utils/useFetch";
import { AppContext } from "./AppContext";

const App = () => {
  const data = useFetch();
  // const [dData, setData] = useState(data);

  // const value = useMemo(() => ({ dData, setData }), [dData, setData]);
  return (
    <Router>
      <Header />
      <AppContext.Provider value={data}>
        <Route path="/" exact component={Deck} />
        <Route path="/assets" component={Assets} />
      </AppContext.Provider>
    </Router>
  );
};

export default App;
