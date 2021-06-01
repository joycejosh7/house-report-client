import React, { Component } from 'react'

class Service extends Component {
    render() {
        const { title, contractor, company, description, date } = this.props
        return (
            <div>
                <h3>{title}</h3>
                <p>{contractor}</p>
                <p>{company}</p>
                <p>{description}</p>
                <p>{date}</p>
            </div>
        )
    }
}

export default Service
