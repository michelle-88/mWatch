import React from "react";
import { Link } from "react-router-dom";
import Landing from "../components/Landing"

function Home(){
    return(
        <div>
            <Landing/>
            <h3></h3>
            <div className="text-center">
                <Link to="/login"><button className="btn btn-lg">Login</button></Link>
                <Link to="/signup"><button className="btn btn-lg">Sign Up</button></Link>
            </div>
        </div>
    )
}

export default Home;