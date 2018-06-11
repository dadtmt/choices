import React, { Component } from "react"
import { connect } from "react-redux"

import Select from "../components/Select"
import { makeChooseShop } from "../actions/actions"

const mapStateToProps = state => ({
  shops: state.shops
})

const mapDispatchToProps = dispatch => ({
  select: shopId => dispatch(makeChooseShop(shopId))
})

class ShopSelect extends Component {
  render() {
    return (
      <div>
        {this.props.shops.map(shop => (
          <Select key={shop.id} {...shop} select={this.props.select} />
        ))}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopSelect)
