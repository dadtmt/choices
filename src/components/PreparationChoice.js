import React from "react"
import Select from "./Select"

const PreparationChoice = ({ id, name, preparations, select }) => (
  <div
    style={{
      border: "1px solid black",
      margin: "10px"
    }}
  >
    <h5>{name}</h5>
    {preparations.map(preparation => (
      <Select
        key={preparation.id}
        {...preparation}
        name={preparation.titlePreparation}
        select={preparationId => {
          select(id, preparationId)
        }}
      />
    ))}
  </div>
)

export default PreparationChoice
