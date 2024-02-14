import React, { useState } from 'react';
import './App.css';



function Calculator() {
    const [value,setValue]=useState("");
    const [res,setRes]=useState('');

    function handleClick(n){

        if(n == '='){
            let lastWord=value.charAt(value.length-1);
            if( lastWord == '+' || lastWord == '-' || lastWord=='*' || lastWord == '/'){
                alert("Please Enter the Second value !!!")
            }
            setRes(eval(value));
            console.log(value.charAt(value.length-1))
        }
        else if(n == "del"){
         
            let r=value.substring(0,value.length-1);
            setValue(r);
        }
        else if(n == 'C'){
            setValue('');
            setRes('')
        }
        else{
            if(res){
                console.log("inside res");
                // setValue('');
                setValue(res+n);
                setRes('');
            }
            else
            setValue(value+n);
        }

    }



  return (
    <div className="calculator">
      {/* <div >{}</div> */}
      <input className="display" value={res ? res : value} type='text'/>
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
