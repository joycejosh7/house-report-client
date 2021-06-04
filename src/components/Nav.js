import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        const navStyle = {
            fontFamily: "arial",
            fontColor: "black",
            backgroundColor: "yellow",
            fontSize: "18px",
            display: "inline-block, -moz-inline-box",
            listStyleType: "none",
        }
        return (
            <div>
                <ul style={navStyle}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/services/new">Add Service</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav
