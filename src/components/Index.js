import React, { Component } from 'react';
import { connect } from 'react-redux';
import Service from './Service';

class Index extends Component {
    render() {
        const services = this.props.services.map( (service, i) => <Service key={i} title={service.title} contractor={service.contractor} company={service.company} description={service.description} date={service.date}/>)

        return (
            <div>
               { services } 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        services: state.services
    }
}

export default connect(mapStateToProps)(Index)