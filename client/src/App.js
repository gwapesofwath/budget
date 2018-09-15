import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Budget from "./components/Budget";
import Nav from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//          <div className="App">
//         <NavbarFeatures />
//         <Switch>
//       <Route path="/budget" component={Budget}/>
//         </Switch>
//       </div>
//       </Router>
//     );
//   }
// }

// const App = () => (
//   <Router>
//     <div>
//       <Nav />
//       <Jumbotron />
//       <Icons />
//       <Budget />
//       <Switch>
//         <Route exact path="/" component={Budget} />
//         <Route exact path="/Budget" component={Budget} />
//       </Switch>
//     </div>
//   </Router>
// );
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


