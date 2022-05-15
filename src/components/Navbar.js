import React, { useState } from 'react';
//import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from './logo.png';
import "./navbar.css"
 
const Navbar = () => {
    const navigate = useNavigate();
    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout', {withCredentials:true});
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    // const [toggleMenu, setToggleMenu] = useState(false);
 
    return (
        <div className="nav-bar-container-light">
              <img
                src= {logo}
                className="website-logo"
                alt="website logo"
              />
              <button
                type="button"
                className="theme-button"
                testid="theme"
                onClick={Logout}>
               Log Out 
              </button>
            </div>
    )
}
 
export default Navbar