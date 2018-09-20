import React from 'react';
import { Link } from "react-router-dom";
import "./icons.css";

// import image from './img/budgetman.png';

class Icons extends React.Component{
    render(){
      return(
<div className="container">
  {/* <div className="row"> */}
    <div className="photos">
      <div className="col-xs-6 col-md-4">
         <Link className="nav-link" to="/Budget"><p> Budget </p></Link> 
        <img src="/assets/img/budgetman.png" alt="golf"/> 
        </div>
        <div className="col-xs-6 col-md-4">
        <Link className="nav-link" to="/Savings"><p> Savings Simulator </p></Link> 
        <img src="/assets/img/moneybag.jpg" alt="golff" />
        </div>
        <div className="col-xs-6 col-md-4">
        <Link className="nav-link" to="/Savings"><p> Saving Strategies </p></Link> 
        <img src="/assets/img/cash.jpg" alt="golff" />
      </div>
      </div>
  {/* </div> */}
</div>
    );
    }
}
export default Icons;


