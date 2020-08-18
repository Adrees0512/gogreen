import React, { Component } from 'react';
import FacebookLogin  from 'react-facebook-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import Axios from 'axios';
import { baseUrl } from '../shared/basedUrl';

export default class Facebook extends Component {

    
     responseFacebook = (response) => {
        console.log("FB RESPONSE:",response);
        Axios.defaults.headers.common['Authorization'] = response.accessToken;
          Axios.get(baseUrl+'auth/user/login/facebook')
          .then(res => {
            console.log("RES",res);
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error)
        })
        // this.props.facebookSignin(response);
      }
    componentClicked = (data) => {
        console.warn("DATA:",data);
      }
      login()
      {
        
      }
    render(){
            let fbContent;
            fbContent=(
              // <FacebookLoginButton 
              //   onClick={() => this.login("Hello")} 
              // />
            <FacebookLogin  appId="3070278633089216"
            autoLoad={false}
            fields="name,email,picture"
            icon="fa-facebook" 
            onClick={this.componentClicked}
            callback={this.responseFacebook} 
            cssClass="btnFacebook"
            textButton = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continue with Facebook"  
            
            />
            );
        return(
            <div>{fbContent}</div>
        )
    }
}