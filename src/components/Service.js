import React, { Component } from 'react'
// import { deleteService } from '../actions'

class Service extends Component {
    render() {
        const { title, contractor, company, description, date } = this.props

        // const handleDelete = () => {
        //     debugger
        //     this.props.deleteService(this.props.service.id)
        //     this.props.history.push("/services")
        //   }

        const serviceStyle = {
            backgroundColor:"grey",
        }

        return (

            <div style={serviceStyle}>
                <h3>{title}</h3>
                <p>Serviced by:  {contractor}</p>
                <p>From: {company}</p>
                <p>Services Rendered: {description}</p>
                <p>{date}</p>
                {/* <button onClick={handleDelete}>Delete</button> */}
            </div>
        )
    }
}

export default Service
