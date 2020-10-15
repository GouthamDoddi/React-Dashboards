import Sider from 'antd/lib/layout/Sider';
import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function Slider() {
    return (
        <div>
<Sider/>
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
        </div>
    )
}

export default Slider
