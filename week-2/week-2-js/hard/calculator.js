/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {

  constructor(){
  this.result = 0
  }
  getResult(){
    return this.result;
  }
  add(number){
    this.result += number
  }
  subtract(number){
    this.result -=number
  }
  multiply(number){
    this.result *=number
  }
  divide(number){
    try {
      if(number === 0){
        throw new Error("this is an error thrown by divide function")
      }else{
      this.result /= number
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  clear(){
    this.result =0;
  }
  calculate(expression){
    try {
      expression = expression.replace(/\s+/g,'')
      if(/[^0-9+\-*/().]/.test(expression)){
        throw new Error("invalid Chars in expression occured in calculate");
      }
      this.checkparantheseis(expression);
      this.result += eval(`${expression}`)
      
      if(isNaN(this.result) || this.result === undefined){
        throw new Error("Error occured in calculate try block")
      }
      }catch (Err) {
      console.log(Err.message);
    }
  }

  checkparantheseis(expression){
    let balance = 0;
    for(let i =0; i <expression.length;i++){
      if(expression[i] === '('){
        balance++;
      }
      if(expression[i] === ')'){
        balance--;
      }
      if(balance != 0){
        throw new Error("There is an invalid number of paranthesis");
      }
    }
    
    if(balance <0){
      throw new Error("Unbalanced paranthesis");
      
    }
  }

}


// const calc = new Calculator();
// calc.add(213)
// // // calc.divide(100)
// calc.calculate("10+31-20-200")

// // calc.divide(0)
// console.log(calc.getResult())
module.exports = Calculator;
