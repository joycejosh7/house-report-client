import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
                <h2>Add Service</h2>
                <form>
                    <div>
                        <label htmlFor="title">Service</label>
                        <input type="text" id="title" />
                    </div>
                    <div>
                        <label htmlFor="contractor">Contractor Name</label>
                        <input type="text" id="contractor" />
                    </div>
                    <div>
                        <label htmlFor="company">Company Name</label>
                        <input type="text" id="company" />
                    </div>
                        <label htmlFor="description">Description of Service</label>
                        <textarea id="description"></textarea>
                    <div>
                        <label htmlFor="date">Date of Service</label>
                        <input type="text" id="date" />
                    </div>

                </form>
            </div>
        )
    }
}

export default Form
