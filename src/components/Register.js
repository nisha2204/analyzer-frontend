import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css"
//import "bulma/css/bulma.css";
 
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    //const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    //const history = useHistory();
    const navigate = useNavigate();
    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://listinganalyzer.herokuapp.com/register', {
                name: name,
                email: email,
            }, {withCredentials:true});
            navigate("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
 
    return (
        <div className="login-page">
            <div className="form">
                <form onSubmit={Register} className="login-form">
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button>Register</button>
                </form>
            </div>
        </div>
    )
}
 
export default Register