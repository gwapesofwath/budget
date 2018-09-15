import React from "react";

const Field = (props) => 
  <div className="input-group">
    <div className="input-group-prepend">
      <input className="input-group-text form-control" placeholder="Name" />
      <input type="number" className={`form-control ${props.name}`} placeholder="Amount" />
    </div>
  </div>

export default Field;