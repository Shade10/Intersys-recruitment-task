import React, { Component } from "react";

import "./FixAge.css";

// Write a function in JS fixage that receives an array of integers.The integers represent ages between 0 and 100. The function is required to join all the integers that are between 18 and 60 into a string separated with a comma and returns it.If there is no integer between 18 and 60, then the function returns "NA".For example: fixage([5, 15, 25, 78, 59, 45]) returns 25, 59, 45 and fixage([18, 3, 30, 22, 11, 60]) returns 18, 30, 22, 60 and fixage([1, 3, 3, 2, 11, 6]) returns NA

class FixAge extends Component {
  state = {
    arrayTest: [1, 22, 30, 17, 18, 55, 44, 60, 422, 89, 100, 76, 61],
    arrayTestTwo: [1, 2, 3, 4, 5, 6, 7, 8],
    result: "",
    resultNaN: "",
    NaN: "NaN"
  };

  getFixAge = array => {
    return array.filter(arr => arr >= 18 && arr <= 60);
  };

  getArray = array => {
    return array.map(el => el) + "";
  };

  isFixed = array => {
    if (this.state.result !== "") {
      return this.state.NaN;
    }
    return array.filter(arr => arr >= 18 && arr <= 60) + "";
  };

  isFixedNan = array => {
    if (this.state.resultNaN !== " ") {
      return this.state.NaN;
    }
    return array.filter(arr => arr >= 18 && arr <= 60) + "";
  };

  componentDidMount() {
    this.setState({
      result: this.isFixed(this.state.arrayTest),
      resultNaN: this.isFixedNan(this.state.arrayTestTwo)
    });
  }

  render() {
    let { result, resultNaN } = this.state;
    return (
      <div className="fixage">
        <p>
          <b>Fixed Age Task</b>
        </p>
        <p>Tablica - {this.getArray(this.state.arrayTest)}</p>
        <p>Fix Age = {result}</p>

        <p>Tablica - {this.getArray(this.state.arrayTestTwo)}</p>
        <p>Fix Age = {resultNaN}</p>
      </div>
    );
  }
}

export default FixAge;
