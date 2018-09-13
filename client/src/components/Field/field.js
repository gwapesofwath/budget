import React from "react";


const Field = (props) => 
  <form>
  <div className="form-group">
    <input  type="text" className="form-control" id=""  placeholder="Name" />
    <input  type="number" className={`form-control ${props.name}`} id=""  placeholder="Amount" />
    </div>
  </form>



export default Field;