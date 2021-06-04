import React, { Component } from 'react'

class Footer extends Component {
    render() {

        const footerStyle = {
            fontFamily:"arial"
        }

        return (
            <div style={footerStyle}>
               &copy; Home Services 2021
            </div>
        )
    }
}

export default Footer
