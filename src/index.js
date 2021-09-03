import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./App";
import { Provider } from "@lyket/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider apiKey="pt_0952dd56de7d238014f8f6931f7d6b">
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
