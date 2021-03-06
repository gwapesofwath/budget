import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Budget from "./components/Budget";
import Nav from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Savings from "./components/Savings";
import Tips from "./components/Tips";
import Login from './components/Login';
import Register from './components/Register';
import Icons from './components/Icons';

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
      <Router>
        <div className="App">
          <Nav />
          <Jumbotron />
          <Icons />
            <Route exact path="/Budget" component={() => <Budget calcSavings={this.calculateSavings} />} />
            <Route exact path="/Savings" component={() => <Savings monthlySavings={this.state.savings} />} />
            <Route exact path="/Savings" component={() => <Tips /> }  />
            <Route path='/login' component={Login} />
            <Route path='/Register' component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;