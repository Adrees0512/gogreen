import React,{ Component } from "react";
import './main.css'
import { Row, Col, Button, Input, FormFeedback, Alert, Container } from "reactstrap";
import logo from '../Assets/GoGreen.png';
import { Control, LocalForm } from 'react-redux-form';
import { FacebookLoginButton,GoogleLoginButton } from "react-social-login-buttons";

import GoogleLogin from 'react-google-login';
import { SocialIcon } from 'react-social-icons';
import Facebook from './FaceBookSigninComopnent';
import { Link, Redirect } from "react-router-dom";
import { baseUrl } from "../shared/basedUrl";
import Axios from "axios";
import Google from "./GoogleSigninComponent";
import SimpleMap from "./SimpleMapComponent";


// const responseFacebook = (response) => {
//   console.log("FB RESPONSE:",response);
// }
// const componentClicked = (data) => {
//   console.warn("DATA:",data);
// }
// const responseGoogle = (response) => {
//   console.log(response);
// }
class Signin extends Component{
    constructor(props){
      super(props);
      this.state={
        email:'',
        password:'',
        loggedin:false,
        touched:{
          email:false ,
          password:false,
        },
        alertFlag:false,

      }
      this.handleLogin=this.handleLogin.bind(this);
      this.handleBlur=this.handleBlur.bind(this);
      this.facebookSignin=this.facebookSignin.bind(this);
      this.googleSignin=this.googleSignin.bind(this);
      this.handleLogout=this.handleLogout.bind(this);
      }
      
      handleLogout(){
        console.log("LOGOUR SIGNIN");
        // this.setState({
        //   loggedin:true
        // })
      }
      facebookSignin(state){
        console.log("HELLOOOO",state);
        
        if(state.status==="unknown")
        {
          console.log("state.status",state.status);
        }
        else{
          this.setState({
          loggedin:true
        })
        localStorage.setItem("id",state.id);
        // console.log('id',state.id)
        var name = state.name.split(" ");
        localStorage.setItem("firstName",name[0]);
        // console.log('name',state.name)
        localStorage.setItem("lastName",name[1]);
        }
        
      }
      googleSignin(state){
        console.log("HELLOOOO",state.Da);
        this.setState({
          loggedin:true
        })
        localStorage.setItem("id",state.Da);
        // console.log('id',state.Da)
        // var name = state.name.split(" ");
        localStorage.setItem("firstName",state.Ot.sW);
        console.log('name',state.Ot.sW)
        // console.log('name',state.Ot.sU)

        localStorage.setItem("lastName",state.Ot.sU);
      }
      handleLogin(e){
        const{email,password}=this.state
        console.log('State is:',this.state);
        if(email.length===0 || password.length===0)
        {
          alert("Fields cant be empty");
        }
        else{
            const userInfo = {
            email: email,
            password : password
        
          };
          console.log(userInfo);
          Axios.post(baseUrl+'Auth/user/login', userInfo )
            .then(res => {
              if(res.data.success===true)
              {
                 this.setState({
                   loggedin:true
                 })
                 localStorage.setItem("id",res.data.user.id);
                //  console.log('id',res.data.user.id)
                 localStorage.setItem("firstName",res.data.user.firstName);
                //  console.log('firstname',res.data.user.firstName)
                 localStorage.setItem("lastName",res.data.user.lastName);
                //  console.log('lastname',res.data.user.lastName)
                 
              }

              console.log(res.data);
            })
            .catch(error=>{
              this.setState({alertFlag:true});
              console.log(error)
            })
        }
      }
      changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
      }
      handleBlur=(field)=>(evt)=>{
        this.setState({
          touched:{...this.state.touched,[field]:true}
        });
      }
      validate (email,password) {
        const errors = {

          email:'',
          password:'',
          
        };

        if(this.state.touched.email && email.split('').filter(x=>x==='@').length!==1){
          errors.email = "Email Should Contain @";
        }
        else if (this.state.touched.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
          errors.email = "Invalid email address";
        }
        return errors;
      }
    render(){

      const{email,password}=this.state
      const errors=(this.validate(email,password))
      if(this.state.loggedin === true)
        {
          return <Redirect to='/simplemap'/>
        }
        else{
          return (
              <div className='Signinbox'>
                <img src={logo} className="" height='150px' width='150px' alt="logo" />
                <h3><p className='textshadow' style={{color:'#B9DD8B'}}>Sign In</p></h3>
                <LocalForm className="col-12 col-md-12 col-sm-12 " >
                  {this.state.alertFlag===true?(
                  <Alert color="danger">
                    Invalid Username or Password
                  </Alert>
                  ):(
                  <div></div>
                  )}
                  <Row className='form-group' >
                    <Col >
                        <Input model=".email" id="email" name="email" value={email} type='text' placeholder="Email" className="form-control" onChange={this.changeHandler} onBlur={this.handleBlur('email')}
                         valid={errors.email===""} invalid={errors.email !==""}  style={{backgroundColor:'#B9DD8B',color:'#0E130E'}}/>  
                         <FormFeedback>{errors.email}</FormFeedback>
                    </Col>
                  </Row> 
                  
                  <Row className='form-group'>
                    <Col >
                    
                      <Input model=".password" id="password" name="password" value={password} type='password' placeholder="Password" className="form-control" onChange={this.changeHandler} onBlur={this.handleBlur('password')}
                       valid={errors.password===""} invalid={errors.password !==""}    style={{backgroundColor:'#B9DD8B',color:'#0E130E'}}/>  
                       <FormFeedback>{errors.password}</FormFeedback>
                    </Col>              
                  </Row>
                  <Row className="form-group">
                      <Col>
                        {errors.email.length===0 && errors.password.length===0 ? (
                          <Button onClick={this.handleLogin}  type="submit" style={{backgroundColor:'#B9DD8B',color:'#0E130E'}}>
                            Signin
                          </Button>
                        ) : (
                          <Button type="submit" disabled style={{backgroundColor:'#B9DD8B',color:'#0E130E'}}>
                            Signin
                          </Button> 
                        )}
                        </Col>
                  </Row>
                  <Row className="form-group" >
                      <Col style={{alignItems:'left'}} >
                        <h5>  Or </h5>
                      </Col>
                  </Row>
                  <Container>
                    <Row className="form-group">
                        <Col xs="12" md="12"  >
                          <Google googleSignin={this.googleSignin}></Google>
                        </Col>
                        <Col xs="12" md="12" >
                          <Facebook  facebookSignin={this.facebookSignin} ></Facebook>
                        </Col>
                    </Row>
                  </Container>
                  
                </LocalForm>
              </div>        

            );
      

        }
    }
    }
  export default Signin;
  