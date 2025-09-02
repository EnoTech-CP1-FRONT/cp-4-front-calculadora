import { useState, useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";

export default function useCalculator() {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const { updateHistory } = useContext(CalculatorContext);

  function doOperation(input) {
    if (input === "C") {
      setOperation("");
      setResult("");
      return;
    }

    if (input === "CE") {
      setResult("");
      setOperation(operation.slice(0, -1));
      return;
    }

    if (input === "=") {
      const operationResult = eval(operation.replace(/,/g, "."));
      const parsedResult = operationResult.toString().replace(/\./g, ",");
      setResult(parsedResult);
      updateHistory(operation, parsedResult);
      return;
    }

    if (result) {
      setResult("");
      setOperation(isNaN(input) ? `${result}${input}` : input);
      setResult("");
      return;
    }

    if (input === "," && !operation.endsWith(",")) {
      setOperation(`${operation},`);
      return;
    }

    setOperation(`${operation}${input}`);
  }

  return {
    operation,
    result,
    doOperation,
  };
}
