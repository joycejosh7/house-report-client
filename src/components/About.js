import React, { Component } from 'react'

class About extends Component {
    render() {

        const aboutStyle = {
            fontFamily:"arial",
            margin:"25px"
        }

        return (
            <div style={aboutStyle}>
                <h2>About page</h2>
                <p>Finally there is a place to keep track of all those home improvements and maintenace items.</p>
                <p>Home Service is the application that will keep all your home information organized.</p>
                
            </div>
        )
    }
}

export default About
