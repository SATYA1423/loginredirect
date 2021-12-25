import React from "react"
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
function Login(){

   
    return (
        <div>
            <br/><br/>
            <center>
            <input type="text" placeholder="username"/> <br></br><br/>
            <input type="password" placeholder="password"/><br></br><br/>
            <Link to="/Profile"><Button color="secondary">Submit</Button></Link>
            </center>
        </div>
    )
}

export default Login;