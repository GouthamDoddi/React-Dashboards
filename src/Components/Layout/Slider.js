import Sider from 'antd/lib/layout/Sider';
import React from 'react'
import { Layout, Menu } from 'antd';


function Slider() {
    return (
        <div>
          <Layout>
<Sider>
<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          nav 1
        </Menu.Item>
        <Menu.Item key="2" >
          nav 2
        </Menu.Item>
        <Menu.Item key="3" >
          nav 3
        </Menu.Item>
        <Menu.Item key="4" >
          nav 4
        </Menu.Item>
      </Menu>
      </Sider>
      </Layout>
        </div>
    )
}

export default Slider
