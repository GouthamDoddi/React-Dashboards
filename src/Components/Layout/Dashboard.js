import React from 'react'
import { Layout } from 'antd';
import Navbar from '../navbar'
import { Menu } from 'antd';
import { MenuItem } from 'react-pro-sidebar';
import "./Dashboard.css"

const { Header, Footer, Sider, Content } = Layout;


function Dashboard() {
    return (
        <>
        
        <Layout>
          <Header>
              <Navbar />
          </Header>

          <Layout>
          
            <Sider className="slider">
                <Menu>
                    <MenuItem key="1">
                        Dashboard
                    </MenuItem>
                    <Menu.Item key="2">
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="3">
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="4">
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="5">
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="6">
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="7">
                        Dashboard
                    </Menu.Item>
                    
                </Menu>
            </Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </>
    )
}

export default Dashboard
