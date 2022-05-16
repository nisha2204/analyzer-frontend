import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'
//import "bulma/css/bulma.css";
 
const Login = () => {
    const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    //const history = useHistory();
    const navigate = useNavigate();
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://listinganalyzer.herokuapp.com/login', {
                email: email,
            }, {withCredentials:true});
            navigate("/analyzer");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
 
    return (
        <div className="login-page">
            <div className="form">
                <form onSubmit={Auth} className="login-form">
                <p>{msg}</p>
                <input type="text" placeholder="username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button>login</button>
                </form>
                <p style={{paddingTop:"10px"}}>Using first time? <a href='./register'>Register</a> </p>
            </div>
        </div>
    )
}
 
export default Login