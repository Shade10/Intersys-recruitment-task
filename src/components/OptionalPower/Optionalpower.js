import React, { Component } from "react";
import "./Optionalpower.css";

class Optionalpower extends Component {
  state = {
    numOne: null,
    numTwo: null,
    result: 0
  };

  makeHandleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    });
  };

  getPower = event => {
    event.preventDefault();
    if (this.state.numTwo === 0) {
      this.setState({
        result: 1
      });
    } else {
      this.setState({
        result: Math.pow(this.state.numOne, this.state.numTwo)
      });
    }
  };

  getPowerReverse = event => {
    event.preventDefault();
    if (this.state.numTwo === 0) {
      this.setState({
        result: 1
      });
    } else {
      this.setState({
        result: Math.pow(this.state.numTwo, this.state.numOne)
      });
    }
  };

  render() {
    return (
      <div className="container">
        {/* Write a function in JS optionalPow that will receive two numeric arguments. The function is required to create some confirmation logic, where if the user agrees with the question (presses OK), then the function is required to compute the result of raising the first argument to the power determined by the second argument. If the user does not agree with the question (presses Cancel), then it should compute the power of the second argument raised to the first one. In both cases, the function must return the computed value. For example, optionalPow(2, 3) should return 8 if OK is pressed, otherwise it should return 9. The solution should be written in the following format: function optionalPow(a, b) { //your code here } */}

        <div>
          <input
            className="input"
            placeholder="Your power number one"
            value={this.state.numOne}
            onChange={this.makeHandleChange("numOne")}
          />
          <input
            className="input"
            placeholder="Your power number two"
            value={this.state.numTwo}
            onChange={this.makeHandleChange("numTwo")}
          />
        </div>
        <div>
          <button className="power" onClick={this.getPower}>
            OK
          </button>
          <button className="power" onClick={this.getPowerReverse}>
            Cancel
          </button>
        </div>

        <p>Result = {this.state.result}</p>
      </div>
    );
  }
}

export default Optionalpower;
