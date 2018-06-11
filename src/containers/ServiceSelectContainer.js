import React, { Component } from "react"
import { connect } from "react-redux"

import Select from "../components/Select"
import { makeChooseService } from "../actions/actions"

const mapStateToProps = state => ({
  services: state.services
})

const mapDispatchToProps = dispatch => ({
  select: serviceId => dispatch(makeChooseService(serviceId))
})

class ServiceSelect extends Component {
  render() {
    return (
      <div>
        {this.props.services.map(service => (
          <Select key={service.id} {...service} select={this.props.select} />
        ))}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceSelect)
