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
  ModalFooter,Card, CardBody, ButtonGroup
} from 'reactstrap';
import logo from '../Assets/GoGreen.png';
import Signin from './SigninComponent';
import Signup from './SignupComponent';
import { Tabs, Tab } from 'react-bootstrap';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const HomeNavbar = (props) => {
  
  const {
    buttonLabel,
    className
  } = props;

  
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [signinModal, setSigninModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [overAllCollapse, setOverAllCollapse] = useState(false);
  const [key, setKey] = useState('signin');
  
  const toggle = () => setIsOpen(!isOpen);
  const overAllToggle = () => setOverAllCollapse(!overAllCollapse);
  const signinAndSignupToggle = () => setModal(!modal);
  // const overAllToggle = () => setOverAllCollapse(!overAllCollapse);

  const toggleSignin = () => {
    setSigninModal(!signinModal);
    setCloseAll(false);
  }

  const toggleSignup = () => {
    setSignupModal(!signupModal);
    setCloseAll(false);
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
          <NavLink ><Button style={{background:"#143306", color:" #caa472"}} onClick={signinAndSignupToggle}> Register/Sign in </Button></NavLink>
            <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
              toggle={signinAndSignupToggle} className={className}>
              <ModalHeader toggle={signinAndSignupToggle}>Register/Sign in</ModalHeader>

              <ModalBody>
              {/* onClick={toggleSignin} */}
              {/* <ButtonGroup>
              <Button  variant="outlined" onClick={overAllToggle} > Signin</Button>
              <Button  variant="outlined" onClick={overAllToggle} > Signup</Button>
              </ButtonGroup> */}
              <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
              <Tab eventKey="signin" title="signin">
                <Signin></Signin>
              </Tab>
              <Tab eventKey="signup" title="signup">
                <Signup></Signup>
              </Tab>
              
            </Tabs>
              
              {/* <Collapse isOpen={overAllCollapse}>
                    <Signup></Signup>
              </Collapse>
              <Collapse isOpen={!overAllCollapse}>

              <Signin></Signin>

                </Collapse> */}
                {/* <Modal isOpen={signinModal} toggle={toggleSignin} onClosed={closeAll ? toggle : undefined}>
                  <ModalHeader>Register/Signin</ModalHeader>
                  <ModalBody>
                    <Signin></Signin>
                  </ModalBody>
                  <ModalFooter>
                    <Button  style={{background:"#143306", color:" #caa472"}} onClick={toggleSignin}>cancel</Button>
                  </ModalFooter>
                </Modal> */}
              </ModalBody>
              {/* <ModalBody> */}
              {/* onClick={toggleSignup} */}
              {/* <Button  onClick={overAllToggle} style={{background:"#caa472", color:" #143306"}} size="lg" block> Signup</Button>
              <Collapse isOpen={overAllCollapse}>
                <Card>
                  <CardBody>
                    OVERALL TOTAL TREES PLANTED:
                  </CardBody>
                  </Card>
              </Collapse> */}
              {/* <Button  onClick={overAllToggle} style={{background:"#caa472", color:" #143306"}} size="lg" block> Signup</Button>
                <Modal isOpen={signupModal} toggle={toggleSignup} onClosed={closeAll ? toggle : undefined}>
                  <ModalHeader>Sign Up</ModalHeader>
                  <ModalBody>
                  
                    <Signup></Signup>
                  </ModalBody>
                  <ModalFooter>
                    <Button  style={{background:"#143306", color:" #caa472"}} onClick={toggleSignup}>close</Button>
                  </ModalFooter>
                </Modal> */}
              {/* </ModalBody> */}
              <ModalFooter>
                <Button style={{background:"#143306", color:" #caa472"}} onClick={signinAndSignupToggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </NavItem>
          </Nav>
          
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HomeNavbar;