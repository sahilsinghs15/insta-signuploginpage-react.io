import { useState } from 'react';
import './App.css';

import logo from "./assets/instagram.png";
function App() {
  const [login , setLogin] = useState(true);

  const loginSwitch = () =>{
    setLogin(!login)
  }
    return (
      <>
        <div id='Container'>
            <div id='user'>
                <img src = {logo} alt=''/>
                <input hidden = {login} type='text' name='' placeholder='Mobile Number or email ' id='' />
                <input hidden = {login} type='text' name='' placeholder='Full Name' id='' />

                <input type='email' name='' id='' placeholder='Phone Number , Username , Or Email' />
                <input type='password' name='' id='' placeholder='Password' />

                <button>{login ? "Sign in " : "Sign Up"}</button>

                <div id='footer' className='change-login-type'>
                    {login ? "Don't Have an account" : "have an account ?"}
                    <span onClick={loginSwitch}> {login ? "Sign Up" : "Login"}</span>

                </div>
            </div>
        </div>
      </>
    )
}

export default App
