import React, { useEffect, useState } from 'react';
import './Navbar.css'
import Login from './Login'
import SignUp from './SignUp'

function Navbar(){

    const [currentUser, setCurrentUser] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)
    console.log(currentUser)
    const [display, setDisplay] =  useState(false)

    const [flag, setFlag] = useState("")

    useEffect(()=>{
        fetch("/users", {
                credentials: "include", 
        }).then((res)=>{
            if (res.ok) {
                res.json().then((user)=>{
                    setCurrentUser(user);
                    setAuthenticated(true)
                })
            } else {
                    setAuthenticated(true)
                }
            })
        fetch(
            "https://countryflagsapi.com/svg/826"
        ).then(r=>setFlag(r))
    }, [])

    if (!authenticated) {
        return (
            <div></div>
        )
    }

    
    // console.log(flag)
    // useEffect(()=>{
        
    // },[])

    const handleClick = () => {

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

                {
                    display === false ?
                        (
                    <Login />
                    )
                        :
                        (
                    <SignUp />
                    )
                } 
                
            
        </div>
        
    )
}

export default Navbar;