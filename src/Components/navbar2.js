import React from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'


function navbar2() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Administration</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#features">Action</Nav.Link>
      <Nav.Link href="#pricing">status</Nav.Link>
      <Nav.Link href="#pricing">category</Nav.Link>
      <Nav.Link href="#pricing">view all</Nav.Link>
      <NavDropdown title="category" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default navbar2
