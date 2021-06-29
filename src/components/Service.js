import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteService } from '../actions/index'

class Service extends Component {
    render() {
        const { title, contractor, company, description, date } = this.props.service

        const handleDelete = () => {
            this.props.deleteService(this.props.service.id)
            // this.props.history.push("/services")
          }

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
                <button onClick={handleDelete}>Delete</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteService: (id) => {dispatch(deleteService(id))}
    }
}

export default connect(null, mapDispatchToProps)(Service)
// export default Service