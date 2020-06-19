import React, { Component } from "react";
import { connect } from "react-redux";
import PrimaryLayout from "./PrimaryLayout";
import PublicLayout from "./PublicLayout";
@connect((state) => ({ token: state.token }))
class Layout extends Component {
  render() {
    const { token } = this.props; //是否有token(在redux中查看)
    return token ? <PrimaryLayout /> : <PublicLayout />; //有=>说明登录成功,可以访问私有路由 反之只能访问公开路由
  }
}
export default Layout;
