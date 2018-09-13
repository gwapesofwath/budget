import React from "react";

class Budget extends React.Component {
  state = {

  }

  addField = () => {

  }

  render() {
    return (
      <div className="container">
        <div id="wallet">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Paycheck</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Amount" />
                <button onClick={this.addField()}>this</button>
                </div>
            </form>
        </div>

        <div id="bills">

        </div>

      </div>
    )
  }
}

export default Budget;