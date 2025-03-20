import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState(0);
  const [wait, setWait] = useState(false);
  //const [outupt , setOutput]=useState(null)
  // const [operator,setOperator]=useState(null)
  // const [firstOperand,setFirstOperand]=useState(null)

  const inputDigit = (digit) => {
    if (wait) {
      setResult(digit);
      setWait(false);
    } else {
      setResult(result == "0" ? digit : result + digit);
    }
  };

  const handleOperator = (symbol) => {
    if (result.at(-1) != symbol) {
      setResult(result + symbol);
    } else {
      let a = result.at(-1);
      setResult(result.replace(a, symbol));
    }
  };
  const inputDecimal = (dec) => {
    if (!result.includes(dec)) {
      setResult(result + dec);
    }
  };

  const clear = () => {
    setResult(0);
  };

  const back = () => {
    setResult(result.slice(0, result.length - 1));
    if (result == result.at(-1)) {
      setResult(0);
    }
  };

  const calculator = () => {
    if (result.includes("+")) {
      const plus = result.indexOf("+");
      console.log(plus);
      const left = Number(result.slice(0, plus));
      const right = Number(result.slice(plus + 1, result.length));
      setResult(left + right);
    } else if (result.includes("-")) {
      const plus = result.indexOf("-");
      console.log(plus);
      const left = Number(result.slice(0, plus));
      const right = Number(result.slice(plus + 1, result.length));
      setResult(left - right);
    } else if (result.includes("*")) {
      const plus = result.indexOf("*");
      console.log(plus);
      const left = Number(result.slice(0, plus));
      const right = Number(result.slice(plus + 1, result.length));
      setResult(left * right);
    } else if (result.includes("/")) {
      const plus = result.indexOf("/");
      console.log(plus);
      const left = Number(result.slice(0, plus));
      const right = Number(result.slice(plus + 1, result.length));
      setResult(left / right);
    } else if (result.includes("%")) {
      const plus = result.indexOf("%");
      console.log(plus);
      const left = Number(result.slice(0, plus));
      const right = Number(result.slice(plus + 1, result.length));
      let a = left % right;
      setResult(a.toFixed(2));
    }
  };

  return (
    <>
      <div className="grid justify-center mt-10   ">
        <div className="border-2 p-3 rounded-xl ">
          <div>
            <h1 className="border-2 rounded-2xl px-3 py-2 mb-3 text-right">
              {result}
            </h1>
          </div>
          <div className="">
            <button
              className="rounded-full border-2 px-3 py-1 text-center m-1  focus:bg-black focus:text-white focus:border-2-white focus:border-2  shadow-xl shadow-gray-500"
              onClick={() => inputDigit("1")}
            >
              1
            </button>
            <button
              className="rounded-full border-2 px-3 py-1 text-center m-1   focus:bg-black focus:text-white focus:border-2-white focus:border-2  shadow-xl shadow-gray-500"
              onClick={() => inputDigit("2")}
            >
              2
            </button>
            <button
              className="rounded-full border-2 px-3 py-1 text-center m-1  focus:bg-black focus:text-white focus:border-2-white focus:border-2  shadow-xl shadow-gray-500"
              onClick={() => inputDigit("3")}
            >
              3
            </button>
            <button
              className="rounded-full border-2 px-3 py-1 text-center m-1  focus:bg-black focus:text-white focus:border-2-white focus:border-2  shadow-xl shadow-gray-500"
              onClick={() => handleOperator("+")}
            >
              +
            </button>
          </div>
          <div className="">
            <button
              className="rounded-full border-2 px-3 py-1 text-center m-1  focus:bg-black focus:text-white focus:border-2-white focus:border-2  shadow-xl shadow-gray-500"
              onClick={() => inputDigit("4")}
            >
              4
            </button>
            <button
              className="rounded-full border-2 px-3 py-1 text-center m-1  focus:bg-black focus:text-white focus:border-2-white focus:border-2  shadow-xl shadow-gray-500"
              onClick={() => inputDigit("5")}
            >
              5
            </button>
            <button
              className="rounded-full border-2 px-3 py-1 text-center m-1  focus:bg-black focus:text-white focus:border-2-white focus:border-2  shadow-xl shadow-gray-500"
              onClick={() => inputDigit("6")}
            >
              6
            </button>
            <button
              className="rounded-full border-2 px-3 py-1 text-center m-1  focus:bg-black focus:text-white focus:border-2-white focus:border-2  shadow-xl shadow-gray-500"
              onClick={() => handleOperator("-")}
            >
              -
            </button>
          </div>
          <div className="">
            <button
              className="rounded-full border-2 px-3 py-1 text-center m-1  focus:bg-black focus:text-white focus:border-2-white focus:border-2  shadow-xl shadow-gray-500"
              onClick={() => inputDigit("7")}
            >
              7
            </button>
            <button
              className="rounded-full border-2 px-3 py-1 text-center m-1  focus:bg-black focus:text-white focus:border-2-white focus:border-2  shadow-xl shadow-gray-500"
              onClick={() => inputDigit("8")}
            >
              8
            </button>
            <button
              className="rounded-full border-2 px-3 py-1 text-center m-1  focus:bg-black focus:text-white focus:border-2-white focus:border-2  shadow-xl shadow-gray-500"
              onClick={() => inputDigit("9")}
            >
              9
            </button>
            <button
              className="rounded-full border-2 px-3 py-1 text-center m-1  focus:bg-black focus:text-white focus:border-2-white focus:border-2  shadow-xl shadow-gray-500"
              onClick={() => handleOperator("*")}
            >
              *
            </button>
          </div>
          <div className="">
            <button
              className="rounded-full border-2 px-3 py-1 text-center m-1  focus:bg-black focus:text-white focus:border-2-white focus:border-2  shadow-xl shadow-gray-500"
              onClick={() => inputDecimal(".")}
            >
              .
            </button>
            <button
              className="rounded-full border-2 px-3 py-1 text-center m-1  focus:bg-black focus:text-white focus:border-2-white focus:border-2  shadow-xl shadow-gray-500"
              onClick={() => inputDigit("0")}
            >
              0
            </button>
            <button
              className="rounded-full border-2 px-3 py-1 text-center m-1  focus:bg-black focus:text-white focus:border-2-white focus:border-2  shadow-xl shadow-gray-500"
              onClick={() => handleOperator("/")}
            >
              /
            </button>
            <button
              className="rounded-full border-2 px-3 py-1 text-center m-1  focus:bg-black focus:text-white focus:border-2-white focus:border-2  shadow-xl shadow-gray-500"
              onClick={() => handleOperator("%")}
            >
              %
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={calculator}
              className="rounded-full border-2 px-3 py-1 text-center m-1 w-[70%]  shadow-xl shadow-gray-500 focus:bg-black focus:text-white focus:border-2-white focus:border-2"
            >
              =
            </button>
            <button
              onClick={clear}
              className="rounded-full border-2 px-3 py-1 text-center m-1   shadow-xl shadow-gray-500 focus:bg-black focus:text-white focus:border-2-white focus:border-2"
            >
              AC
            </button>
            <button
              onClick={back}
              className="rounded-full border-2 px-3 py-1 text-center m-1   shadow-xl shadow-gray-500 focus:bg-black focus:text-white focus:border-2-white focus:border-2"
            >
              b
            </button>
          </div>
        </div>
      </div>
      <p className="text-center m-30">@ibne_ahad</p>
    </>
  );
}

export default Calculator;
