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
            await axios.post('http://localhost:5000/login', {
                email: email,
            });
            navigate("/analyzer");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
 
    return (
        // <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        //     <div className="hero-body">
        //         <div className="container">
        //             <div className="columns is-centered">
        //                 <div className="column is-4-desktop">
        //                     <form onSubmit={Auth} className="box">
        //                         <p className="has-text-centered">{msg}</p>
        //                         <div className="field mt-5">
        //                             <label className="label">Email or Username</label>
        //                             <div className="controls">
        //                                 <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
        //                             </div>
        //                         </div>
        //                         {/* <div className="field mt-5">
        //                             <label className="label">Password</label>
        //                             <div className="controls">
        //                                 <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
        //                             </div>
        //                         </div> */}
        //                         <div className="field mt-5">
        //                             <button className="button is-success is-fullwidth">Login</button>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
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