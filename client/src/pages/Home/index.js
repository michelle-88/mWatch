import React from "react";
import { Link } from "react-router-dom";
import Landing from "../../components/Landing";
import LandingImage from "../../components/LandingImage"
import "./style.css"

function Home(){
    return(
        <div id="home" className="bg-dark">
            <Landing/>
            <div className="text-center bg-dark">
                <button className="btn btn-lg bg-white"><Link to="/login"><span className="text-dark">Login</span></Link></button>
                <button className="btn btn-lg bg-white"><Link to="/register"><span className="text-dark">Register</span></Link></button>
            </div>
            <LandingImage/>
        </div>
    )
}

export default Home;