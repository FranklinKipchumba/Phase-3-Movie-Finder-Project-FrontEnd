import React from "react";
import { Link } from "react-router-dom";


function Homepage() {

    return(
        <div className="homenav">
            <image scr="../Movies/logo.jpg"/>
            <nav className="top">
                <Link to= "/rigisterpage">Home</Link>
                <Link to= "/rigisterpage">Movies</Link>
                <Link to= "/rigisterpage">Hot News</Link>
                <Link to= "/rigisterpage"></Link>
                <span>
                <Link to="/registerpage">Sign Up</Link>
                <Link to="/login">Login</Link>
                </span>
            </nav>
            <h1 className="bottom">Welcome to FrankNet.
            </h1>
        </div>
    )
}

export default Homepage;