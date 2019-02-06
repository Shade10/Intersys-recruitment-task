import React, { Component } from "react";

import "./FixAge.css";

// Write a program that takes an integer N(N between 2 and 20 inclusive), and an array of N integers as input.Your program should output the most occurring digit that appears in the numbers of this array.If more than one digit satisfies this condition, output the bigger one.Note: The integer N will be given in the first line, and the array of N integers will be given in the second line.Each integer will be separated by a single space character ' '.Note2: A digit is an integer between 0 and 9. Example: Case 1: For input given as: 4 101 20 21 3 The output of the program will be: 1 Description of the output: The digit 0 appears 2 times(One time on the first number and another time on the second number), the digit 1 appears 3 times(Two times on the first number and another time on the third number), the digit 2 appears 2 times(One time on the second number and another time on the third number), and the digit 3 appears only one time, that is, on the last number.So the most common digit is 1. Case 2: For input given as: 3 111 222 5 The output of the program will be: 2 Description of the output: Both digits 1 and 2 appear the maximum number of times, that is, 3 times.Since 2 is bigger than 1, the answer is 2 instead of 1.

class FixAge extends Component {
  state = {
    arrayTest: [1, 22, 30, 17, 18, 55, 44, 60, 422, 89, 100, 76, 61],
    result: ""
  };

  getFixAge = array => {
      return array.filter(arr => arr >= 18 && arr <= 60) + ", "
  };

  getArray = (array) => {
      return array.map(el => el) + ""
  }

  componentDidMount() {
    this.setState({
      result: this.getFixAge(this.state.arrayTest)
    });
    
  }

  render() {
    return (
      <div className="fixage">
        {console.log(this.getArray)}
        <p>Tablica - {this.getArray(this.state.arrayTest)}</p>
        Fix Age = {this.state.result}
      </div>
    );
  }
}

export default FixAge;
