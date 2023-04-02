import React from "react";
import { NavLink } from 'react-router-dom';
import './Home.css';
import logo from './kletecg.png';




export default class Home extends React.Component {


    render() {
        return (
            <div className="links">
                <header>
                    <div class="wrapper">
                        
                        <ul class="nav-area">
                            <li><NavLink to="/login"><div className="link">Login/Signup</div></NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <img src={logo} alt="Logo" />;
                    </div>
                    <div class="wel">
                        <h1>Build your aptitude skills</h1>
                    </div>
                </header>
            </div>

        )
    }
}