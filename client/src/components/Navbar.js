import React, { useEffect, useState } from 'react';
import './Navbar.css'
// import Login from './Login'
// import SignUp from './SignUp'

function Navbar(){

    const [flag, setFlag] = useState("")

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    console.log("Data in signup form: ", formData)
    const [displayLogin, setDisplayLogin] = useState(true)
    // console.log(displayLogin)
    const [displaySignUp, setDisplaySignUp] =  useState(false)
    // console.log(displaySignUp)
    const [logStatus, setLogStatus] = useState(false)
    // console.log(logStatus)
    // const [click, setClick] = useState(false)
    // console.log(click)

    const [currentUser, setCurrentUser] = useState("Ady")
    console.log("Current user logged in: ", currentUser)
    const [authenticated, setAuthenticated] = useState(false)
    console.log("Authentication Status: ", authenticated)

    useEffect(()=>{
        fetch(
            "/users"
        ).then(
            r=>r.json()
        ).then(
            r=>console.log(r)
        )

        fetch(
            "/me"
            , {
                credentials: "include"
            }
        ).then(
            r=>{
                if (r.ok) {
                    r.json().then((user)=>{
                        setCurrentUser(user);
                        setAuthenticated(true)
                    })
                } else {
                    // setAuthenticated(true)  
                }
            }
        )

        fetch(
            "https://countryflagsapi.com/svg/826"
        ).then(r=>setFlag(r))
    }, [])

    // if (!authenticated) {
    //     return (
    //         <div></div>
    //     )
    // }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    
    const handleLoginSubmit = (e) => {
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          };
          e.preventDefault();
          fetch("/login", configObj).then((resp) => {
            if (resp.ok) {
              resp.json().then((user) => {
                setCurrentUser(user);
              });
            } else {
              resp.json().then((errors) => {
                console.error(errors);
              });
            }
          });
    }
    const displayLoginForm = (e) => { // 1
        e.preventDefault()
        setDisplayLogin(false)
        setDisplaySignUp(true)
        setLogStatus(false)
        setFormData({
            username: "",
            password: ""
        })
    }
    const handleLoginFormSubmit = (e) => { // 2
        e.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        fetch(
            "/users", configObj
        ).then(
            (r)=>{
                r.json()
                // if (r.ok) {
                //     r.json().then(
                //         (user)=>{
                //             setCurrentUser(user)
                //         }
                //     )
                // } else {
                //     r.json().then(
                //         (errors)=>{
                //             console.error(errors)
                //         }
                //     )
                // }
            }
        )
        setDisplayLogin(true)
        setDisplaySignUp(false)
        setLogStatus(false)
        setFormData({
            username: "",
            password: ""
        })
    }
    const displayLogout = (e) => { // 3
        e.preventDefault()
        setDisplayLogin(true)
        setDisplaySignUp(false)
        setLogStatus(false)
        setFormData({
            username: "",
            password: ""
        })
    }
    const displayLoginStatus = (e) => { // 4
        e.preventDefault()
        setDisplayLogin(false)
        setDisplaySignUp(false)
        setLogStatus(true)
    }
    return (
        <div className="Navbar">
            <div className="Navbaritems">
                <p className="title">Piano Master</p>
            </div>

            <div className="Navbaritems">
                <p className="flagItems">Language: </p>
                <img className="flatItems" src={flag.url} className="flag" alt="flag_image" />
            </div>
            <div>

                {
                    displayLogin === false ?
                        (
                            <div/>
                        )
                        :
                        (
                            <form onSubmit={handleLoginSubmit}>
                                <label className="login">Username:</label>  
                                <input 
                                    className="login"
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={(e)=>handleChange(e)}
                                    autocomplete="off"
                                    >
                                </input>
                                <label className="login">Password:</label>
                                <input 
                                    className="login"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={(e)=>handleChange(e)}
                                    autocomplete="off"
                                    >
                                </input>
                                <button className="login"
                                    type="submit"
                                    onClick={displayLoginStatus}
                                    >Login
                                </button>
                                <p className="login" id="loginLink" 
                                onClick={displayLoginForm}
                                >Don't have an account?
                                </p>
                            </form>
                        )
                        
                }

                {
                    displaySignUp === false ?
                        (
                            <div/>
                        )
                        :
                        (
                            <form onSubmit={handleLoginFormSubmit}>
                                <label className="login">Username:</label>
                                        <input 
                                            className="login"
                                            name="username"
                                            value={formData.username}
                                            onChange={(e)=>handleChange(e)}
                                            autocomplete="off"
                                            >
                                        </input>
                                        <label className="login">Password:</label>
                                        <input 
                                            className="login"
                                            name="password"
                                            value={formData.password}
                                            onChange={(e)=>handleChange(e)}
                                            autocomplete="off"
                                            >
                                        </input>
                                        <button 
                                            className="login"
                                            type="submit"
                                            >Signup
                                        </button>
                            </form>
                        )
                }

                {
                    logStatus === false ?
                        (
                            <div/>
                        )
                        :
                        (
                            <div className="Navbaritems">
                                <p 
                                    className="login" 
                                    id="yourLoggedIn"
                                    >{currentUser} is Logged In
                                </p>
                                <p 
                                    className="login" 
                                    id="loginStatus" 
                                    onClick={displayLogout}
                                    >Logout
                                </p>
                            </div>
                        )
                }

            </div>

        </div> 
    )
}

export default Navbar;