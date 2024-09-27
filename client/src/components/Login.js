import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <div class="kesha">
      <link href="./login-component.css" rel="stylesheet" />
      <div id="login" class="login-component-container">
        <span class="login-component-text"><span>LOGIN</span></span>
        <div class="login-component-container1"></div>
        <div class="login-component-container2">
          <span class="login-component-text1">
            <span>Username / Email Id</span>
          </span>
          <input
            type="text"
            placeholder="Username / Email Id"
            autocomplete="email"
            class="login-component-textinput input"
          />
          <span class="login-component-text2"><span>Password</span></span>
          <input
            type="Password"
            placeholder="Password"
            autocomplete="current-password"
            class="login-component-textinput1 input"
          />
          <span class="login-component-text3">
            <span>Forget Password ?</span>
          </span>
        </div>
        <div class="login-component-container3">
          <button type="button" class="login-component-button button">
            <Link to="/"><span>Login</span></Link>
          </button>
        </div>
        <div class="login-component-container4"></div>
        <div class="login-component-container5"></div>
        <Link to="/register" class="login-component-navlink">
          <span>Create a new account</span>
        </Link>
      </div>
    </div>
  
</>
  )
}

export default Login