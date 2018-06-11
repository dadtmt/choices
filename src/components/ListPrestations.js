import React from "react"
import PreparationChoice from "./PreparationChoice"

const ListPrestations = ({ prestations }) => (
  <div>
    {prestations.map(prestation => (
      // <div>{prestation.name}</div>
      <PreparationChoice key={prestation.id} {...prestation} />
    ))}
  </div>
)

export default ListPrestations
