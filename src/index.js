import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const render = Component => {
  return ReactDOM.render(<App />, document.getElementById("root"));
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}

serviceWorker.unregister();
