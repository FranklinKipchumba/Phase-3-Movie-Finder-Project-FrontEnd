import React from "react";
import { Link } from "react-router-dom";


function Homepage() {

    return(
        <div className="homenav">
            <image scr="./Movies/logo.jpg"/>
            <nav className="top">
                <Link to="/registerpage">Sign Up</Link>
                <Link to="/login">Login</Link>
            </nav>
            <h1 className="bottom">Welcome to FrankNet, Where the movies become a reality
            </h1>
        </div>
    )
}

export default Homepage;