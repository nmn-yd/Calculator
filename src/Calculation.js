function Calculation(operator, currValue, prevValue) {
  if (currValue === "0") return "";

  let result;
  if (operator === "+") {
    result = Number(currValue) + Number(prevValue);
  } else if (operator === "-") {
    result = Number(currValue) - Number(prevValue);
  } else if (operator === "*") {
    result = Number(currValue) * Number(prevValue);
  } else if (operator === "÷") {
    result = Number(prevValue) / Number(currValue);
    result = result.toString();
    if (result.includes(".")) {
      result = Number(result).toFixed(4);
    }
  }

  return result.toString();
}

export default Calculation;
