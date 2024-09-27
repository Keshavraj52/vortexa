/* eslint-disable no-undef */
import React from 'react'; 
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./register.css"

function Register() {
   
  return (
   <>
            <div
              id="login"
              class="register-component-container register-component-root-class-name1"
            >
              <span class="register-component-text"><span>REGISTER</span></span>
              <div class="register-component-container1"></div>
              <div class="register-component-container2"></div>
              <div class="register-component-container3">
                <span class="register-component-text1"><span>Name</span></span>
                <input
                  type="text"
                  placeholder="Name"
                  autocomplete="email"
                  class="register-component-textinput input"
                />
                <span class="register-component-text2">
                  <span> Email Id</span>
                </span>
                <input
                  type="text"
                  placeholder="Email Id"
                  autocomplete="email"
                  class="register-component-textinput1 input"
                />
                <span class="register-component-text3"><span>Password</span></span>
                <input
                  type="Password"
                  placeholder="password"
                  autocomplete="email"
                  class="register-component-textinput2 input"
                />
                <span class="register-component-text4">
                  <span>Confirm Password</span>
                </span>
                <input
                  type="Password"
                  placeholder="Confirm Password"
                  autocomplete="current-password"
                  class="register-component-textinput3 input"
                />
              </div>
              <div class="register-component-container4"></div>
              <button type="button" class="register-component-button button">
               <Link to="/login"><span>Register</span></Link> 
              </button>
              <span class="register-component-text5">
               <Link to="/login"> <span>Already have an account ?</span></Link>
              </span>
            </div>


           
           </>
      )
}

export default Register