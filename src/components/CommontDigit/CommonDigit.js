import React, { Component } from "react";

// Write a program that takes an integer N and an array of N positive integers as input.Your program should output the position(0 - based) of the array in which the value in that position has the maximum digit sum possible.A digit sum of some value is the sum of its digits.If there's more than one position that satisfies this condition, print the greatest one. Note: The integer N will be given in the first line, and the array of N integers will be given in the second line (Each integer separated by a single space). Note1: 0-based position means that the first position of the array is equal to 0, the second is equal to 1, and so on. Example: Case 1: For input given as: 3 2 4 3 The output of the program will be: 1 Description of the output: The maximum digit sum we can get is 4 by getting the value in position 1 of the array. So, our answer is 1. Case 2: For input given as: 3 20 21 19 The output of the program will be: 2 Description of the output: The maximum digit sum we can get is 10 by summing up 1 and 9 from the number 19 in position 2 of the array. So, our answer is 2.

class CommonDigit extends Component {
  state = {
    N: null,
    array: [],
    input: "",
    counter: 0
  };

  commonDigitCount = event => {
    event.preventDefault();
    var arr = this.state.array;

    for (var i = 0; i < arr.length; i++) {
      var tmp = arr[i] + "";
      if (tmp.length > this.state.counter) {
        this.setState({
          counter: tmp.length
        });
      }
    }
  };

  makeHandleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    });
  };

  putToArray = event => {
    event.preventDefault();

    this.setState({
      input: this.state.array.splice(0, this.state.N),
      array: this.state.input
    });
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <p>
          <b>Common Digit</b>
        </p>

        <form onSubmit={this.putToArray}>
          <input
            placeholder="Number of N"
            value={this.state.N}
            onChange={this.makeHandleChange("N")}
          />
          <input
            placeholder="your numbers"
            value={this.state.array}
            onChange={this.makeHandleChange("array")}
          />
          <button type="submit">OK</button>
        </form>
        <p>Result = {this.commonDigitCount}</p>
      </div>
    );
  }
}

export default CommonDigit;
