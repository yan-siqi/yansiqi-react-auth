import { GET_USER_INFO, GET_MENU } from "./constants";
const initUser = {
  name: "", //用户民
  avater: "", //用户头像
  permissionValueList: [], //按钮权限列表
  permissionList: [], //路由权限列表
};
export default function user(prevState = initUser, action) {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...prevState, //展开之前的所有数据
        ...action.data,
      };
    case GET_MENU:
      return {
        ...prevState, //展开之前的所有数据
        permissionList: action.data, //课下改...
      };
    default:
      return prevState;
  }
}
