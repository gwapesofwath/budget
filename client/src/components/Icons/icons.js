import React from 'react';
import { Link } from "react-router-dom";
import "./icons.css";






// import image from './img/budgetman.png';

class Icons extends React.Component{
    render(){
      return(
        <div className="photos">
        <div class="col-xs-6 col-md-4">
        <p> Budget </p>
        <img src="/assets/img/budgetman.png" alt="golf"/>
        </div>
        <div class="col-xs-6 col-md-4">
        <p> Savings Simulator </p>
        <img src="/assets/img/moneybag.jpg" alt="golff" />
        </div>
        <div class="col-xs-6 col-md-4">
        <p> Savings Straegies </p>
        <img src="/assets/img/moneybag.jpg" alt="golff" />
        </div>
      </div>
    );
    }
}
export default Icons;

