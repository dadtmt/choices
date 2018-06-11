import React, { Component } from "react"
import { connect } from "react-redux"

import {
  showServices,
  showSex,
  showFemalePrestation,
  showMalePrestation
} from "../display"
import ServiceSelectContainer from "./ServiceSelectContainer"
import ShopSelectContainer from "./ShopSelectContainer"
import PrestationFemaleContainer from "./PrestationFemaleContainer"
import PrestationMaleContainer from "./PrestationMaleContainer"
import GenderContainer from "./GenderContainer"

const mapStateToProps = state => ({
  showServices: showServices(state),
  showSex: showSex(state),
  showFemalePrestation: showFemalePrestation(state),
  showMalePrestation: showMalePrestation(state)
})

class Page extends Component {
  render() {
    return (
      <div>
        <ShopSelectContainer />
        {this.props.showServices && <ServiceSelectContainer />}
        {this.props.showSex && <GenderContainer />}
        {this.props.showMalePrestation && <PrestationMaleContainer />}
        {this.props.showFemalePrestation && <PrestationFemaleContainer />}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Page)
