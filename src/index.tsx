import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as BRouter, Route } from "react-router-dom";

import "./index.css";
import Login from "./Login";

ReactDOM.render(
  <React.StrictMode>
    <BRouter>
      <>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
      </>
    </BRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
