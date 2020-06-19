import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom"; //给路由组件传递三大属性
import Layout from "./layout";
// 引入公共样式
import "./assets/css/reset.css";
import "./assets/css/common.less";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}
