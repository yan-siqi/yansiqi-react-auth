// import { lazy } from "react";
// const Login = lazy(() => {
//   //定义路由懒加载
//   import(/* webpackChunkName: "login" */ "@pages/Login");
// });
// const Oauth = lazy(() => {
//   //定义路由懒加载
//   import(/*webpackChunkName:"oauth"*/ "@pages/Login/components/Oauth");
// });
// const NotFound = lazy(() => {
//   //定义路由懒加载
//   import(/*webpackChunkName:"404"*/ "@pages/404");
// });
// //配置公开路由表
// const constantRoutes = [
//   {
//     title: "登录",
//     path: "/login",
//     component: Login,
//   },
//   {
//     title: "授权登录",
//     path: "/oauth",
//     component: Oauth,
//   },
//   {
//     title: "404页面中不到",
//     path: "*", //能匹配上任意路径
//     component: NotFound,
//   },
// ];
// //配置私有路由表 =>只要可登录成功就能访问私有路由表
// const defaultRoutes = [
//   {
//     title: "首页",
//     path: "/",
//     component: "Admin",
//   },
// ];
// export { constantRoutes, defaultRoutes }; //将公开路由和私有路由暴露出去
/*
  路由表配置文件
*/
import { lazy } from "react";

// 路由懒加载~
const Login = lazy(() =>
  /* 
    默认打包的模块名称使用id命名，id从0开始递增 
    webpackChunkName: "login" 给打包的模块取个名字
  */
  import(/* webpackChunkName: "login" */ "@pages/Login")
);
const Oauth = lazy(() =>
  import(/* webpackChunkName: "oauth" */ "@pages/Login/components/Oauth")
);
const NotFound = lazy(() => import(/* webpackChunkName: "404" */ "@pages/404"));

// 公开路由表
const constantRoutes = [
  {
    title: "登录",
    path: "/login",
    component: Login,
  },
  {
    title: "授权登录",
    path: "/oauth",
    component: Oauth,
  },
  {
    title: "404",
    path: "*",
    component: NotFound,
  },
];

// 私有路由表
const defaultRoutes = [
  {
    // 只要登录过就能访问首页
    title: "首页",
    path: "/",
    component: "Admin",
  },
];

export { constantRoutes, defaultRoutes };
