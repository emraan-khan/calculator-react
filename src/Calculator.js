import React, { useState } from 'react';
import './App.css';



function Calculator() {
    const [value,setValue]=useState("");

    function handleClick(n){
           try {
            if (n === '=') {
                setValue(eval(value));
            } else if (n === "C") {
                setValue('');
            } else if (n === 'del') {
                setValue(value.toString().slice(0, -1));
            } else {
                setValue(value + n);
            }
        } catch (error) {
            alert('Error: Invalid expression');
            // Optionally, you can also clear the input if an error occurs
            setValue('');
        }
    }



  return (
    <div className="calculator">
      {/* <div >{}</div> */}
      <input className="display" value={value} type='text' placeholder='0/>
      <div className="buttons">
        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('+/-')}>+/-</button>
        <button onClick={() => handleClick('%')}>%</button>
        <button onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('del')}>del</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>

      </div>
    </div>
  );
}

export default Calculator;
