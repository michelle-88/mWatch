import React, { Component } from "react";
import { Link } from "react-router-dom";
import Landing from "../components/Landing"

function Home(){
    return(
        <div>
            <Landing/>
            <h3></h3>
            <div className="text-center">
                <button className="btn btn-lg"><Link to="/login">Login</Link></button>
                <button className="btn btn-lg"><Link to="/signup">Sign Up</Link></button>
            </div>
        </div>

    )
}

export default Home;