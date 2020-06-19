import React, { Component, Suspense } from "react";
import {Switch,Route} from 'react-router-dom'
import {constantRoutes} from '@conf/routes'
const Loading = <div>loading</div>; //定义loading组件
export default class PublicLayout extends Component {
  renderRoutes = (routes) => {
    //可以根据路径的变化自动加载路由组件
    return routes.map((route) => {
      return (
        <Route
          key={route.path}
          path={route.path} //路由路径
          component={route.component} //通过路由加载的组件
          exact //通过严格模式进行匹配(路径必须一致)
        />
      );
    });
  };
  render() {
    //进行路由表渲染,switch只有一个路由组件可以诶渲染
    return (
      <Suspense fallback={Loading}>
        <Switch>{this.renderRoutes(constantRoutes)}</Switch>
      </Suspense>
    );
  }
}
