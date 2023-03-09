import React from "react";
import { Link } from "react-router-dom";


function Homepage() {

    return (
        <div className="homenav">
            <nav className="top">
                <nav className="logo">
                    <img src="./logo.jpg" alt="FrankNet" />
                </nav>
                <Link to="/registerpage">Home</Link>
                <Link to="/registerpage">Movies</Link>
                <Link to="/registerpage">Hot News</Link>
                <Link to="/registerpage"></Link>
                <nav className="split">
                    <Link to="/registerpage">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </nav>

            </nav>
            <h1 className="bottom">Welcome to FrankNet.
            </h1>
        </div>
    )
}

export default Homepage;