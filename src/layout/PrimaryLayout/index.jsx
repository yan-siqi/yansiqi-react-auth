import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import logo from "@assets/images/logo.png";
import "./index.less";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class PrimaryLayout extends Component {
  state = {
    collapsed: false,
  };
  //控制收缩和展开的方法
  onCollapse = (collapsed) => {
    // console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout className="layout">
        <Sider
         /*  左侧导航 */
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="layout-logo">
            <img src={logo} alt="logo" />
            {!this.state.collapsed && <h1>硅谷教育管理系统</h1>}
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
             后台管理系统
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="权限管理">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="教育管理">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="个人管理">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        {/* 右边布局 */}
        <Layout>
          {/* 头部 */}
          <Header className="layout-header">
            <img src={logo} alt="avatar" />
            <span>adimin</span>
            {/* 小地球 */}
            <GlobalOutlined />
          </Header>
          <Content>
            <div className="layout-nav">
              <Breadcrumb>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <h3>user</h3>
            </div>
            <div className="layout-content">Bill is a cat.</div>
          </Content>
          {/* 右侧底部 */}
          <Footer className="layout-footer">
            ©2020课程版权均归硅谷教育管理系统所有
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default PrimaryLayout;
