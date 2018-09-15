import React from "react";
import Field from "../Field";
import "./budget.css";

class Budget extends React.Component {
  state = {
    walletCounter: [],
    paycheck: 0,
    otherIncome: 0,
    saveFirst: 0,
    billCounter: [],
    wallet: 0,
    expenses: 0,
    leftover: 0
  }

  calculateBudget = () => {
    // calculate wallet
    // ------------------------------------------------
    const incomeArr = document.getElementsByClassName("wallet");
    let savings = document.getElementsByClassName("pay-yourself");
    let savingsNum = parseInt(savings[0].value, 10);
    let incomeTotal = 0;

    for (let i = 0; i < incomeArr.length; i++) {
      let ele = parseInt(incomeArr[i].value, 10);
      console.log(ele);
      if (isNaN(ele)) {
        ele = 0;
      }
      console.log("converted" + ele)
      incomeTotal += ele;
    }
    incomeTotal -= savingsNum;
    console.log("INCOME TOTAL " + incomeTotal);
    // ------------------------------------------------
    // calculate bills
    // ------------------------------------------------
    const expenseArr = document.getElementsByClassName("bills");
    let expenseTotal = 0;

    for (let i = 0; i < expenseArr.length; i++) {
      let ele = parseInt(expenseArr[i].value, 10);
      if (isNaN(ele)) {
        ele = 0;
      }
      expenseTotal += ele;
    }
    console.log("EXPENSE TOTAL " + expenseTotal);
    // ------------------------------------------------
    // calculate net income after bills and update state
    // ------------------------------------------------
    let scratchIncome = incomeTotal - expenseTotal;

    this.setState({
      wallet: incomeTotal,
      leftover: scratchIncome,
      expenses: expenseTotal,
      saveFirst: savingsNum
    });
    this.props.calcSavings(savingsNum);
  }
  // ------------------------------------------------
  // manage adding fields to wallet/bills
  // ------------------------------------------------
  addIncome = () => {
    let wCounter = this.state.walletCounter;
    wCounter.push(1);
    this.setState({walletCounter: wCounter})
  }

  addExpense = () => {
    let bCounter = this.state.billCounter;
    bCounter.push(1);
    this.setState({billCounter: bCounter});
  }
  // ------------------------------------------------

  divStyle = {
    width: "18rem"
  };

  render() {
    return (
      <div className="container">

        <header><h5>This is your monthly budget page.  Add in your income and expenses below.</h5></header>
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
                <input type="number"  className="form-control wallet" placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Other Income</span>
                </div>
                <input type="number"  className="form-control wallet" placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Save First</span>
                </div>
                <input type="number"  className="form-control pay-yourself" placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Current Balance</span>
                </div>
                <input type="number"  className="form-control wallet" placeholder="Amount" />
              </div>
              <hr/>

              {this.state.walletCounter.map(blank => (<Field name="wallet" />))}
              <button className="btn btn-secondary" onClick={this.addIncome}>addField</button>
              <h5 className="wallet-total">Wallet: {this.state.wallet}</h5>
              <hr/>

              <button className="btn btn-primary" onClick={this.calculateBudget}>Submit</button>
              <div id="net"><h5>Net Income: {this.state.leftover}</h5></div>
            </div>
          </div>

          {/*bills*/}
          <div className="card" style={this.divStyle}>
            <div className="card-body">
              <h3>Monthly Expenses</h3>
              <hr/>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Mortgage/Rent</span>
                </div>
                <input type="number"  className="form-control bills" placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Car Payment</span>
                </div>
                <input type="number"  className="form-control bills" placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Car Insurance</span>
                </div>
                <input type="number"  className="form-control bills" placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Gas</span>
                </div>
                <input type="number"  className="form-control bills" placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Food</span>
                </div>
                <input type="number"  className="form-control bills" placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Subscriptions</span>
                </div>
                <input type="number"  className="form-control bills" placeholder="Amount" />
              </div>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Credit Cards</span>
                </div>
                <input type="number"  className="form-control bills" placeholder="Amount" />
              </div>
              <hr/>

              {this.state.billCounter.map(blank => (<Field name="bills"/>))}
              <button className="btn btn-secondary" onClick={this.addExpense}>addField</button>
              </div>
              <h5 className="bills-total">Bills Total: {this.state.expenses}</h5>
            </div>
          </div>

      </div>
    )
  }
}

export default Budget;