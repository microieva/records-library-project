export {};
/*import React from "react";
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { loginSuccess } from '../redux/actions';
import "../scss/login-page.scss";

const LoginPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  
  const responseGoogle = async (response:any) => {
    const res = await axios.post('http://localhost:3001/api/v1/users/login',{
      id_token: response.tokenObj.id_token
    })
    
    console.log('res ', res);
    if (res.status === 200) {
      dispatch(loginSuccess(res.data, history))
    } else {
      //dispatch(loginFailed())
      alert('Login Failed')
    }
  }

  return (
    <GoogleLogin
      clientId="391700730466-tdi0a11fnhht3tl7budat5utlephuad9.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
};

export default LoginPage;*/
