import React from "react"
import Select from "./Select"

const PreparationChoice = ({ name, preparations }) => (
  <div
    style={{
      border: "1px solid black",
      margin: "10px"
    }}
  >
    <h5>{name}</h5>
    {preparations.map(preparation => (
      <Select key={preparation.id} name={preparation.titlePreparation} />
    ))}
  </div>
)

export default PreparationChoice
