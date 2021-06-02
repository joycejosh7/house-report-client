import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addService } from '../actions'; 

class Form extends Component {
    state = {
        title: "",
        contractor: "",
        company: "",
        description: "",
        date: ""
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addService(this.state, this.props.history)
    }

    render() {
        return (
            <div>
                <h2>Add Service</h2>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <label htmlFor="title">Service </label>
                        <input type="text" id="title" name="title" value={ this.state.title } onChange={ this.handleChange } />
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="contractor">Contractor Name </label>
                        <input type="text" id="contractor" name="contractor" value={ this.state.contractor } onChange={ this.handleChange } />
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="company">Company Name </label>
                        <input type="text" id="company" name="company" value={ this.state.company } onChange={ this.handleChange } />
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="description">Description of Service </label>
                        <textarea id="description" name="description" value={ this.state.description } onChange={ this.handleChange } ></textarea>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="date">Date of Service </label>
                        <input type="text" id="date" name="date" value={ this.state.date } onChange={ this.handleChange } />
                    </div>
                    <br/>
                    <input type="submit" value="Add Service" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addService })(Form)
