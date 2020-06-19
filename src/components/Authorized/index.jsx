import React, { Component } from "react";
import { connect } from "react-redux";
import { getMenu, getUserinfo } from "./redux";
import PrimaryLayout from '../../layout/PrimaryLayout'
import Loading from './Loading'
@connect(null,{getMenu,getUserinfo})
class Authorized extends Component {//请求同用户数据和权限数据
  //定义loading
  state={
      isLoading:true
  }
  componentDidMount() {
    const { getMenu, getUserinfo } = this.props;
    const promises = [getMenu(), getUserinfo()];
    Promise.all(promises).then(() => {
      //数据已经全部请求回来
      this.setState({
          isLoading:false
      })
    });
  }
  render() {
      const {isLoading}=this.state
    return isLoading? <div>loading...</div>:<PrimaryLayout />;
  }
}
export default Authorized