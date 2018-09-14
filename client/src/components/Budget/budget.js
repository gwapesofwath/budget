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

    let scratchIncome = incomeTotal - expenseTotal;

    this.setState({
      wallet: incomeTotal,
      leftover: scratchIncome,
      expenses: expenseTotal
    });
  }

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

  render() {
    return (
      <div className="container">
        <header><h5>This is your monthly budget page.  Add in your income and expenses below.</h5></header>
        <div id="walletArea">
        <h5>Income</h5>
          <form>
            <div className="form-group">
              <label>Paycheck </label>
              <input type="number"  className="form-control wallet" placeholder="Amount" />
            </div>
          </form>
          <form>
            <div className="form-group">
              <label>Other Income </label>
              <input type="number"  className="form-control wallet" placeholder="Amount" />
            </div>
          </form>
          <form>
            <div className="form-group">
              <label>Pay Yourself First </label>
              <input type="number"  className="form-control pay-yourself" placeholder="Amount" />
            </div>
          </form>
          <form>
            <div className="form-group">
              <label>Checking Account Balance </label>
              <input type="number"  className="form-control wallet" placeholder="Amount" />
            </div>
          </form>
          {this.state.walletCounter.map(blank => (<Field name="wallet" />))}
          <button onClick={this.addIncome}>addField</button>
        </div>
        <h5 className="wallet-total">Wallet: {this.state.wallet}</h5>
        <br/>
        
        <div id="billsArea">
        <h5>Expenses</h5>
        <form>
          <div className="form-group">
            <label>Mortgage/Rent </label>
            <input type="number"  className="form-control bills" placeholder="Amount" />
          </div>
        </form>
        <form>
          <div className="form-group">
            <label>Car Payment </label>
            <input type="number"  className="form-control bills" placeholder="Amount" />
          </div>
        </form>
        <form>
          <div className="form-group">
            <label>Car Insurance </label>
            <input type="number"  className="form-control bills" placeholder="Amount" />
          </div>
        </form>
        <form>
          <div className="form-group">
            <label>Gas </label>
            <input type="number"  className="form-control bills" placeholder="Amount" />
          </div>
        </form>
        <form>
          <div className="form-group">
            <label>Food </label>
            <input type="number"  className="form-control bills" placeholder="Amount" />
          </div>
        </form>
        <form>
          <div className="form-group">
            <label>Subscriptions </label>
            <input type="number"  className="form-control bills" placeholder="Amount" />
          </div>
        </form>
        <form>
          <div className="form-group">
            <label>Credit Cards </label>
            <input type="number"  className="form-control bills" placeholder="Amount" />
          </div>
        </form>
        {this.state.billCounter.map(blank => (<Field name="bills"/>))}
        <button onClick={this.addExpense}>addField</button>
        </div>
        <h5 className="bills-total">Bills Total: {this.state.expenses}</h5>
        <br/>
        
        <button onClick={this.calculateBudget}>Submit</button>

        <div id="net">
          <h5>Net Income: {this.state.leftover}</h5>
        </div>

      </div>
    )
  }
}

export default Budget;