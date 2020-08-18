import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { GoogleLoginButton } from 'react-social-login-buttons';
import Axios from 'axios';
import { baseUrl } from '../shared/basedUrl';

export default class Google extends Component {
//     constructor(props) {
//         super(props);
    
//         this.state = {
//           isLogined: false,
//           accessToken: ''
//         };
    
//         this.login = this.login.bind(this);
//         this.handleLoginFailure = this.handleLoginFailure.bind(this);
//         this.logout = this.logout.bind(this);
//         this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
//       }
    
//   login (response) {
//     if(response.accessToken){
//       this.setState(state => ({
//         isLogined: true,
//         accessToken: response.accessToken
//       }));
//     }
//   }

//   logout (response) {
//     this.setState(state => ({
//       isLogined: false,
//       accessToken: ''
//     }));
//   }

//   handleLoginFailure (response) {
//     alert('Failed to log in')
//   }

//   handleLogoutFailure (response) {
//     alert('Failed to log out')
//   }
    responseGoogle = (response) => {
        console.log(response);
        // this.props.googleSignin(response);

    }
    //   login()
    //   {
    //       Axios.get(baseUrl+'auth/user/login/google')
    //       .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
    //   }
    //   auth/user/login/google
    render(){
            let googlecontent;
            googlecontent=(
                // <GoogleLoginButton onClick={() => this.login()} />
            <GoogleLogin
                clientId="260009526760-is9mtiggp8ho6papmd8njstok3djkc2v.apps.googleusercontent.com"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                className="btnGoogle"
                responseType='code,token'
               >
                <span> Continue with Google</span> 
               </GoogleLogin>
               );
        return(
            <div>{googlecontent}</div>
            // <div>
            // { this.state.isLogined ?
            //     <GoogleLogout
            //     clientId="260009526760-is9mtiggp8ho6papmd8njstok3djkc2v.apps.googleusercontent.com"
            //     buttonText='Logout'
            //     onLogoutSuccess={ this.logout }
            //     onFailure={ this.handleLogoutFailure }
            //     >
            //     </GoogleLogout>: <GoogleLogin
            //     clientId="260009526760-is9mtiggp8ho6papmd8njstok3djkc2v.apps.googleusercontent.com"
            //     buttonText='Login'
            //     onSuccess={ this.login }
            //     onFailure={ this.handleLoginFailure }
            //     cookiePolicy={ 'single_host_origin' }
            //     responseType='code,token'
            //     />
            // }
            // { this.state.accessToken ? <h5>Your Access Token: <br/><br/> { this.state.accessToken }</h5> : null }

            // </div>
        )
    }
}