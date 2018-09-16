import React from "react";
import "./savings.css";

class Savings extends React.Component {
  state = {
    whatIfSavings: 0,
    savingsGoal: 0
  }

  updateSavings() {
    this.setState({monthlySavings: this.props.monthlySavings});
  }

  handleInputChange = event => {
    let value = parseInt(event.target.value, 10) || 0;
    const name = event.target.name;
    
    this.setState({
      [name]: value
    });
  };

  divStyle = {
    width: "18rem"
  };


  render() {
    return (
      <div className="container">
        <header><h5>This is the Savings Simulator</h5></header>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div>This is your monthly savings: {this.props.monthlySavings}</div>
                <hr/>

                <div>What if you increased your savings by 
                  <input type="number" placeholder="Amount" name="whatIfSavings" onChange={this.handleInputChange}/> per month?
                </div>
                <hr/>

                <div>How much do you need to achieve your savings goal?</div>
                <input type="number" name="savingsGoal" onChange={this.handleInputChange} placeholder="Amount"/>
                <hr/>
                
                <p>It will take you about {this.state.savingsGoal/(this.props.monthlySavings + this.state.whatIfSavings)} months to achieve this goal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Savings;