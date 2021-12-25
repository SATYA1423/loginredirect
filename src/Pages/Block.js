import React from "react";
import { Link } from "react-router-dom";
function Block(){
    return (
        <div><center><h1>welcome To My Pages</h1><br></br> 
             <Link to="/Profile">BackToProfilePage</Link><br></br><br></br>
            <Link to="/">BackToLoginPage</Link>
            </center>


        </div>
        
    );
}

export default Block;