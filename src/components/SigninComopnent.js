import React,{ Component } from "react";
import './main.css'
import { Row, Col, Button } from "reactstrap";
import logo from '../Assets/GoGreen.png';
import { Control, LocalForm } from 'react-redux-form';
import { FacebookLoginButton,GoogleLoginButton } from "react-social-login-buttons";
import { Link } from "react-router-dom";



class Signin extends Component{
    constructor(props){
      super(props);
      this.state={
        username:'',
        password:'',
      }
      this.handleLogin=this.handleLogin.bind(this);
      }

      handleLogin(e){
        const{username,password}=this.state
        console.log('State is:',this.state);
      }
      changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
      }
    render(){
      const{username,password}=this.state
      return (
        <div className='bgsignin' >
          <div className='Signinbox'>
            <img src={logo} className="" height='150px' width='150px' alt="logo" />
            <h3><p className='textshadow' style={{color:'#B9DD8B'}}>Sign In</p></h3>
            <LocalForm onSubmit={this.handleLogin}  className="col-12 col-md-12 col-sm-12 " >

              
              <Row className='form-group'>
              <i className="fa fa-lock" ></i>
              <i className="fa fa-user"></i>
                <Col >
                
                    <Control.text model=".username" id="username" name="username" value={username} type='text' placeholder="Username" className="form-control" onChange={this.changeHandler}
                      style={{backgroundColor:'#B9DD8B',color:'#0E130E'}}/>  
                </Col>
              </Row> 
              
              <Row className='form-group'>
                <Col >
                  <Control.text model=".password" id="password" name="password" value={password} type='password' placeholder="Password" className="form-control" onChange={this.changeHandler}
                      style={{backgroundColor:'#B9DD8B',color:'#0E130E'}}/>  
                </Col>              
              </Row>
              <Row className="form-group">
                  <Col>
                      <Button type="submit" style={{backgroundColor:'#B9DD8B',color:'#0E130E'}}>
                          LOGIN
                      </Button>
                      
                    </Col>
              </Row>
              <Row className="form-group" >
                  <Col style={{alignItems:'left'}} >
                    <h5>  Or </h5>
                  </Col>
              </Row>
              <Row className="form-group" >
                  <Col className="col-12 col-md-6 col-sm-6 ">
                    <GoogleLoginButton onClick={() => alert("Hello")} />
                  </Col>
                  <Col className="col-12 col-md-6 col-sm-6 ">
                    <FacebookLoginButton onClick={() => alert("Hello")} />
                  </Col>
              </Row>
              <Row className="form-group" >
                <Col>
                  <h5>Not a member? <Link to='/signup'><strong>SignUp now</strong></Link></h5>
                </Col>
              </Row>
            </LocalForm>
          </div>        
        </div>
            
        );
      }
    }
  export default Signin;
  