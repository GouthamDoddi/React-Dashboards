import React from 'react'
import {FormControl,Navbar} from 'react-bootstrap'
import ForumIcon from '@material-ui/icons/Forum';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';

import "./navbar.css"

function navbar() {
    return (
        <div>
            <Navbar className="nav" bg="light" expand="lg">
  
    <div class="search">
    <SearchIcon className="search_icon"/>
      <FormControl  type="text" placeholder="Search" className="searchbar" />
    </div>

<div className="icons">
    <NotificationsIcon/>
    <ForumIcon />
    </div>
  
</Navbar>
        </div>
    )
}

export default navbar
