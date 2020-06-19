import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //给子组件传递store对象
import App from "./App";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
//渲染组件