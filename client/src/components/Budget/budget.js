import React from "react";
// import Field from "../Field";
import "./budget.css";
import {Link} from "react-router-dom";

class Budget extends React.Component {
  state = {
    paycheck: 0,
    otherIncome: 0,
    saveFirst: 0,
    currentBalance: 0,
    wallet: 0,
    housing: 0,
    carPayment: 0,
    carInsurance: 0,
    gas: 0,
    food: 0,
    subscriptions: 0,
    creditCards: 0,
    otherBills: 0,
    billsTotal: 0,
    leftover: 0
  }

  handleInputChange = event => {
    let value = parseInt(event.target.value, 10) || 0;
    const name = event.target.name;

    // UPDATE STATE
    this.setState({[name]: value}, function(){
      let saveFirst = this.state.saveFirst;
      this.calculateBudget(saveFirst);
    });
  };

  calculateBudget() {
    // CALCULATE TOTAL WALLET
    let wallet = 
    this.state.paycheck +
    this.state.otherIncome +
    this.state.currentBalance;
    // CALCULATE TOTAL BILLS
    let billsTotal = 
    this.state.saveFirst +
    this.state.housing +
    this.state.carPayment +
    this.state.carInsurance +
    this.state.gas +
    this.state.food +
    this.state.subscriptions +
    this.state.creditCards +
    this.state.otherBills;
    // CALCULATE NET INCOME AFTER BILLS
    let leftover = wallet - billsTotal;

    this.setState({
      wallet: wallet,
      billsTotal: billsTotal,
      leftover: leftover
    });
  }

  divStyle = {
    width: "18rem"
  };

  render() {
    return (
      <div className="container">

        {/* <header><h5>This is your monthly budget page.  Add in your income and expenses below.</h5></header> */}
        <div className="card-container">
          {/* wallet */}
          <div className="card" style={this.divStyle}>
            <div className="card-body">
              <h3>Monthly Income</h3>
              <hr/>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Paycheck</span>
                </div>
                <input type="number"  className="form-control" name="paycheck" onChange={this.handleInputChange} placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Other Income</span>
                </div>
                <input type="number"  className="form-control" name="otherIncome" onChange={this.handleInputChange} placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Save First</span>
                </div>
                <input type="number"  className="form-control" name="saveFirst" onChange={this.handleInputChange} placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Current Balance</span>
                </div>
                <input type="number"  className="form-control" name="currentBalance" onChange={this.handleInputChange} placeholder="Amount" />
              </div>
              <hr/>

              <h5 className="wallet-total">Wallet: {this.state.wallet}</h5>
              <hr/>
              <div id="net"><h5>Net Income: {this.state.leftover}</h5></div>
              <hr/>
              <Link to ="/Savings"><button className="btn btn-primary">Proceed</button></Link>
            </div>
          </div>

          {/*bills*/}
          <div className="card" style={this.divStyle}>
            <div className="card-body">
              <h3>Monthly Expenses</h3>
              <hr/>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Housing</span>
                </div>
                <input type="number"  className="form-control" name="housing" onChange={this.handleInputChange} placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Car Payment</span>
                </div>
                <input type="number"  className="form-control" name="carPayment" onChange={this.handleInputChange} placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Car Insurance</span>
                </div>
                <input type="number"  className="form-control" name="carInsurance" onChange={this.handleInputChange} placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Gas</span>
                </div>
                <input type="number"  className="form-control" name="gas" onChange={this.handleInputChange} placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Food</span>
                </div>
                <input type="number"  className="form-control" name="food" onChange={this.handleInputChange} placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Subscriptions</span>
                </div>
                <input type="number"  className="form-control" name="subscriptions" onChange={this.handleInputChange} placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Credit Cards</span>
                </div>
                <input type="number"  className="form-control" name="creditCards" onChange={this.handleInputChange} placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Other Bills</span>
                </div>
                <input type="number"  className="form-control" name="otherBills" onChange={this.handleInputChange} placeholder="Amount" />
              </div>

              <hr/>

              </div>
              <h5 className="bills-total">Bills Total: {this.state.billsTotal}</h5>
            </div>
        </div>

      </div>
    )
  }
}

export default Budget;