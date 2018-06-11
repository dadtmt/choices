import { connect } from "react-redux"
import ListPrestations from "../components/ListPrestations"

const mapStateToProps = state => ({
  prestations: state.prestations.filter(prestation => prestation.gender === "M")
})

export default connect(mapStateToProps)(ListPrestations)
