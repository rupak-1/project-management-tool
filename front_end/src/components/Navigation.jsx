import React from 'react'
import {Nav, Container, Navbar, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import project_logo from "../project_assets/project_logo.webp"

function Navigation() {
  return (
       <Navbar bg="light" expand="lg">
         <Container>
           <LinkContainer to="/">
           <Navbar.Brand>
               <img src={project_logo} style={{ width: 50, height: 50 }} alt=""/>
           </Navbar.Brand>
           </LinkContainer>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ms-auto">
               <LinkContainer to="/login">
               <Nav.Link>Login</Nav.Link>
               </LinkContainer>
               <LinkContainer to="/project">
               <Nav.Link>Project</Nav.Link>
               </LinkContainer>
               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.2">
                   Another action
                 </NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="#action/3.4">
                   Separated link
                 </NavDropdown.Item>
               </NavDropdown>
             </Nav>
           </Navbar.Collapse>
         </Container>
       </Navbar>
     )
}

export default Navigation