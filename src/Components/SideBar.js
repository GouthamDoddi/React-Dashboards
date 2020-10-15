import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "./SideBar.css"

import React from 'react'

function SideBar() {
    return (
        <div>
            <ProSidebar className="slide">
  <Menu iconShape="square">
    <MenuItem>Dashboard</MenuItem>
    <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
      <MenuItem>Component 3</MenuItem>
      <MenuItem>Component 4</MenuItem>
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
      <MenuItem>Component 3</MenuItem>
      <MenuItem>Component 4</MenuItem>
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
      <MenuItem>Component 3</MenuItem>
      <MenuItem>Component 4</MenuItem>
  </Menu>
</ProSidebar>;
        </div>
    )
}

export default SideBar

