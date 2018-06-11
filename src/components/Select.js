import React from "react"

const Select = ({ id, name, selected, select }) => (
  <div>
    <h4>{name}</h4>
    {selected && <p>SELECTED</p>}
    <button onClick={() => select(id)}>select</button>
  </div>
)

export default Select
