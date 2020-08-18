import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import logo from '../Assets/GoGreen.png';
import Signin from './SigninComponent';
import Signup from './SignupComponent';
import Axios from 'axios';
import { baseUrl } from '../shared/basedUrl';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const MainNavbar = (props) => {
  
    const firstname=localStorage.getItem('firstName');
    const lastname=localStorage.getItem('lastName');
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout=()=>
  {
      console.log("LOGOUTTT");
        Axios.get(baseUrl+'auth/user/logout')
          .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error)
        })
  }
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src={logo} className="logo" height='60px' width='60px' alt="logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink >OverAll</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >Today</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >This Week</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >This Month</NavLink>
            </NavItem>
          </Nav>
          <Nav>
          <NavItem>
            <NavLink >
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret style={{background:"#143306", color:" #caa472"}}>
              {firstname}{' '}{lastname}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                {firstname}{' '}{lastname}
                </DropdownItem>
                <DropdownItem>
                  EMAIL
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleLogout}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavLink>
          </NavItem>
          </Nav>
          
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavbar;