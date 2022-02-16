import React from 'react';

function Login() {

    return (
        <form>
        <label className="login">Username:</label>
                <input className="login"></input>
                <label className="login">Password:</label>
                <input className="login"></input>
                <button className="login">Login</button>
                <p className="login" id="loginLink" 
                // onClick={handleClick}
                >Don't have an account?</p>
        </form>

    )
}
             
export default Login