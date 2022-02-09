import React, { useEffect, useState } from 'react';
import './Navbar.css'

function Navbar(){
    const [flag, setFlag] = useState("")
    console.log(flag)
    useEffect(()=>{
        fetch("https://countryflagsapi.com/svg/826")
        .then(r=>setFlag(r))
    },[])

    
    
    return (
        <form className="Navbar">
            <div className="Navbaritems">
                <p className="title">Ady's Piano School</p>
            </div>

            <div className="Navbaritems">
                <p className="flagItems">Language: </p>
                <img className="flatItems" src={flag.url} className="flag" alt="flag_image" />
            </div>

            <div className="Navbaritems">
                <label>Username:</label>
                <input className="login"></input>
                <label>Password:</label>
                <input className="login"></input>
                <button>X</button>
            </div>
            
        </form>
        
    )
}

export default Navbar;