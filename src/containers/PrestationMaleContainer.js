import { connect } from "react-redux"

import ListPrestations from "../components/ListPrestations"
import { makeChoosePrestation } from "../actions/actions"

const mapStateToProps = state => ({
  prestations: state.prestations.filter(prestation => prestation.gender === "M")
})

const mapDispatchToProps = dispatch => ({
  select: (prestationId, preparationId) =>
    dispatch(makeChoosePrestation(prestationId, preparationId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPrestations)
