import React, { Component } from 'react';
import './App.css';
import Budget from "./components/Budget";
import Savings from "./components/Savings";

class App extends Component {
  state = {
    savings: 0
  }

  calculateSavings = (savingsNum) => {
    parseInt(savingsNum, 10);
    this.setState({savings: savingsNum});
  }

  render() {
    return (
      <div className="App">
        <Budget calcSavings={this.calculateSavings}/>
        <Savings monthlySavings={this.state.savings}/>
      </div>
    );
  }
}

export default App;
