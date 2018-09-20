import React from "react";
import "./jumbotron.css"
import { Link } from "react-router-dom";

const Jumbotron = ({ children }) => (
    <div
      style={{ height: 450, clear: "both", paddingTop: 200, textAlign: "center" }}
      className="jumbotron"
    > <h1> Get Financially Healthy</h1>
      <h2> Keeping up with finances can be hard. Bank Shot can help steer you in the right direction. </h2>
      {children}
      <button class="btn btn-sm btn-primary btn-block"> <Link className="nav-link" to="/Login">Login</Link></button>
          {/* <p>
            Not a member? <Link to="/register"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
          </p> */}
    </div>
        
    
  );
  
  export default Jumbotron;
  