import React, { Component } from 'react'

class Home extends Component {
    render() {
        
        const homeStyle = {
            fontFamily:"arial",
            margin:"25px"
        }

        return (
            <div className="App" style={homeStyle}>
                <h1>Home Services</h1>

            </div>
        )
    }
}

export default Home
