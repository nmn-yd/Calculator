function Calculation(operator, currValue, prevValue) {
  if (currValue === "0") return "";

  let result;
  if (operator === "+") {
    result = Number(currValue) + Number(prevValue);
  } else if (operator === "-") {
    result = Number(currValue) - Number(prevValue);
  } else if (operator === "*") {
    result = Number(currValue) * Number(prevValue);
  } else {
    result = (Number(currValue) / Number(prevValue)).toFixed(4);
  }

  return result;
}

export default Calculation;
