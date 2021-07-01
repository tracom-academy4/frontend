import React, { Component } from 'react'
import Link from 'next/link'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  PieChartOutlined,
  UserAddOutlined,
  CloseOutlined,
  FileOutlined,
  UserOutlined,
  SolutionOutlined,
  HomeOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class CustomLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>

          <div className="logo" />

          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link href="./dashboard">
                Dashboard
              </Link>
            </Menu.Item>

            <SubMenu key="sub1" icon={<UserOutlined />} title="User Management">
              <Menu.Item key="2" icon={<UserAddOutlined />}>
                <Link href="./new">
                  Add new user
                </Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<CloseOutlined />}>
                <Link href="./viewUsers">
                  View users
                </Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<SolutionOutlined />} title="Event Management">
              <Menu.Item key="4">
                <Link href="./viewMeeting">
                  View Meetings
                </Link>
              </Menu.Item>

              <Menu.Item key="5">
                <Link href="./viewMeeting">
                  Create Meeting
                </Link>
              </Menu.Item>

            </SubMenu>

            <SubMenu key="sub3" icon={<HomeOutlined />} title="Room Management" href="./roomManage" >

              <Menu.Item key="6">
                <Link href="./createRoom">
                  Create Room
                </Link>

              </Menu.Item>

              <Menu.Item key="7">
                <Link href="./room">
                  View Rooms
                </Link>
              </Menu.Item>

              <Menu.Item key="8">
                <Link href="./roomManage">
                  Edit Room
                </Link>
              </Menu.Item>

            </SubMenu>

            <Menu.Item key="9" icon={<FileOutlined />}>
              <Link href="/">
                LogOut
              </Link>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item> { } </Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }} />

        </Layout>
        <style jsx>{`
 .trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
  }
  
 .trigger:hover {
    color: #1890ff;
  }
  
   .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
  
  .site-layout .site-layout-background {
    background: #ffffff;
  }
`}</style>
      </Layout>

    )
  }
}
