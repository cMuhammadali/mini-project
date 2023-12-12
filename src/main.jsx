import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/Store.js";
import ReactDOM from "react-dom/client";
import { todo } from "./store/Todo.js";
import { Provider } from "react-redux";
import "./assets/index.css";
import App from "./App.jsx";
import React from "react";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Provider store={todo}>
      <Router>
        <App />
      </Router>
    </Provider>
    {/* </Provider> */}
  </React.StrictMode>
);
