import React from "react";
import Field from "../Field";

class Budget extends React.Component {
  state = {
    wallet: {
      paycheck: [],
      otherIncome: [],
      saveFirst: [],
      walletCounter: []
    },
    bills: {
      expenses: [],
      billCounter: []
    },
    netIncome: null
  }

  calculateBudget = () => {
    const incomeArr = document.getElementsByClassName("wallet");
    let incomeTotal = 0;
    for (let i = 0; i < incomeArr.length; i++) {
      let ele = parseInt(incomeArr[i].value, 10);
      incomeTotal += ele;
    }
    console.log("INCOME TOTAL " + incomeTotal);

    const expenseArr = document.getElementsByClassName("bills");
    let expenseTotal = 0;
    for (let i = 0; i < expenseArr.length; i++) {
      let ele = parseInt(expenseArr[i].value, 10);
      expenseTotal += ele;
    }
    console.log("EXPENSE TOTAL " + expenseTotal);

    let scratchIncome = incomeTotal - expenseTotal;
    this.setState({netIncome: scratchIncome});
  }

  addIncome = () => {
    let wCounter = this.state.wallet;
    wCounter.walletCounter.push(1);
    this.setState({wallet: wCounter})
  }

  addExpense = () => {
    let bCounter = this.state.bills;
    bCounter.billCounter.push(1);
    this.setState({bills: bCounter});
  }

  render() {
    return (
      <div className="container">
        <header><h3>This is your monthly budget page.  Add in your income and expenses below.</h3></header>
        <div id="walletArea">
        <h3>Income</h3>
            <form>
              <div className="form-group">
                <label>Paycheck</label>
                <input  className="form-control wallet" placeholder="Amount" />
                </div>
            </form>
            {this.state.wallet.walletCounter.map(blank => (
              <Field name="wallet" />
            )) }
            <button onClick={this.addIncome}>addField</button>
        </div>

        <br/>
        
        <div id="billsArea">
        <h3>Expenses</h3>
        <form>
              <div className="form-group">
                <label>Mortgage/Rent</label>
                <input  className="form-control bills" placeholder="Amount" />
                </div>
            </form>
            {this.state.bills.billCounter.map(blank => (
              <Field name="bills"/>
            )) }

            <button onClick={this.addExpense}>addField</button>

        </div>
        
        <br/>
        
        <button onClick={this.calculateBudget}>Submit</button>

        <div id="net">
          <h3>Net Income: {this.state.netIncome}</h3>
        </div>

      </div>
    )
  }
}

export default Budget;