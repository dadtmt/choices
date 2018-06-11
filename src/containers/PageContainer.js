import React, { Component } from "react"
import { connect } from "react-redux"

import { showServices } from "../display"
import ServiceSelectContainer from "./ServiceSelectContainer"
import ShopSelectContainer from "./ShopSelectContainer"

const mapStateToProps = state => ({
  showServices: showServices(state)
})

class Page extends Component {
  render() {
    return (
      <div>
        <ShopSelectContainer />
        {this.props.showServices && <ServiceSelectContainer />}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Page)
