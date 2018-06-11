import React, { Component } from "react"
import { connect } from "react-redux"

import { showServices, showSex } from "../display"
import ServiceSelectContainer from "./ServiceSelectContainer"
import ShopSelectContainer from "./ShopSelectContainer"

const mapStateToProps = state => ({
  showServices: showServices(state),
  showSex: showSex(state)
})

class Page extends Component {
  render() {
    return (
      <div>
        <ShopSelectContainer />
        {this.props.showServices && <ServiceSelectContainer />}
        {this.props.showSex && (
          <div>Show sex because we choosed preparation</div>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Page)
