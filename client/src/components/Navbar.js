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

    const [currentUser, setCurrentUser] = useState("Nobody")
    console.log("Current user logged in: ", currentUser)
    const [authenticated, setAuthenticated] = useState(false)
    
    useEffect(()=>{
        fetch(
            "/users"
        ).then(
            r=>r.json()
        ).then(
            r=>console.log(r)
        )

        // fetch("/users", {
        //         credentials: "include", 
        // }).then((res)=>{
        //     if (res.ok) {
        //         res.json().then((user)=>{
        //             setCurrentUser(user);
        //             setAuthenticated(true)
        //         })
        //     } else {
        //             setAuthenticated(true)
        //         }
        //     })

        fetch(
            "https://countryflagsapi.com/svg/826"
        ).then(r=>setFlag(r))
    }, [])

    // if (!authenticated) {
    //     return (
    //         <div></div>
    //     )
    // }

    
    // console.log(flag)
    // useEffect(()=>{
        
    // },[])
    const displayLoginForm = (e) => { // 1
        e.preventDefault()
        setDisplayLogin(false)
        setDisplaySignUp(true)
        setLogStatus(false)
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
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
                if (r.ok) {
                    r.json().then(
                        (user)=>{
                            setCurrentUser(user)
                        }
                    )
                } else {
                    r.json().then(
                        (errors)=>{
                            console.error(errors)
                        }
                    )
                }
            }
        )
        setDisplayLogin(true)
        setDisplaySignUp(false)
        setLogStatus(false)
    }
    const displayLogout = (e) => { // 3
        e.preventDefault()
        setDisplayLogin(true)
        setDisplaySignUp(false)
        setLogStatus(false)
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
                            <form>
                                <label className="login">Username:</label>  
                                <input 
                                    className="login"
                                    type="text"
                                    name="username"
                                    
                                    >
                                </input>
                                <label className="login">Password:</label>
                                <input 
                                    className="login"
                                    type="password"
                                    name="password"
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
                            <form>
                                <label className="login">Username:</label>
                                        <input 
                                            className="login"
                                            name="username"
                                            value={formData.username}
                                            onChange={(e)=>handleChange(e)}
                                            >
                                        </input>
                                        <label className="login">Password:</label>
                                        <input 
                                            className="login"
                                            name="password"
                                            value={formData.password}
                                            onChange={(e)=>handleChange(e)}
                                            >
                                        </input>
                                        <button 
                                            className="login"
                                            onClick={handleLoginFormSubmit}
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

                {/* {
                    displaySignUp === false ?
                        (
                            <form>
                            <label className="login">Username:</label>  
                                <input className="login"></input>
                                <label className="login">Password:</label>
                                <input className="login"></input>
                                <button className="login"
                                    onClick={handleSubmit}
                                    >Login
                                </button>
                                <p className="login" id="loginLink" 
                                onClick={handleSignUpClick}
                                >Don't have an account?
                                </p>
                            </form>
                        )
                        :
                        (
                            <form>
                                <label className="login">Username:</label>
                                        <input className="login"></input>
                                        <label className="login">Password:</label>
                                        <input className="login"></input>
                                        <button 
                                            className="login"
                                            onClick={handleSignUpClick}
                                            >Signup
                                        </button>
                            </form>
                        )
                } */}
            </div>

            {/* {
                logStatus === false ?
                (
                    <div/>
                )
                :
                (
                <div className="Navbaritems">
                    <p className="login">You are Logged In</p>
                    <p className="login" onClick={handleSubmit}>Logout</p>
                </div>
                )
            } */}
          
                

        </div> 
    )
            }

export default Navbar;