import { useReducer } from "react";

import InputButton from "./InputButton";
import Calculation from "./Calculation";

const initialState = {
  currValue: "",
  prevValue: "",
  operator: "",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "add-digit":
      if (payload === "." && state.currValue.includes(".")) {
        return { ...state };
      } else if (payload === "0" && state.currValue[0] === "0") {
        return { ...state };
      } else if (
        payload !== "0" &&
        state.currValue[0] === "0" &&
        state.currValue.length === 1
      ) {
        return { ...state, currValue: payload };
      } else {
        return { ...state, currValue: state.currValue + payload };
      }

    case "choose-operation":
      if (state.prevValue === "" && state.currValue === "") {
        return { ...state };
      } else if (state.prevValue === "" && state.currValue !== "") {
        return {
          ...state,
          prevValue: state.prevValue + state.currValue,
          operator: payload,
          currValue: "",
        };
      } else if (state.prevValue !== "" && state.currValue === "") {
        return {
          ...state,
          operator: payload,
        };
      } else if (
        state.prevValue !== "" &&
        state.operator !== "" &&
        state.currValue !== ""
      ) {
        let result = Calculation(
          state.operator,
          state.currValue,
          state.prevValue
        );
        return {
          ...state,
          currValue: "",
          operator: payload,
          prevValue: result,
        };
      } else {
        return { ...state };
      }

    case "delete-digit":
      if (state.currValue !== "" && state.operator === "") {
        return { ...state, currValue: state.currValue.slice(0, -1) };
      } else if (state.currValue === "" && state.operator !== "") {
        return {
          ...state,
          currValue: state.prevValue,
          operator: "",
          prevValue: "",
        };
      } else {
        return { ...state, currValue: state.currValue.slice(0, -1) };
      }

    case "clear-digit":
      return { ...state, prevValue: "", operator: "", currValue: "" };

    case "evaluate":
      if (state.currValue && state.prevValue && state.operator) {
        let result = Calculation(
          state.operator,
          state.currValue,
          state.prevValue
        );
        return { ...state, currValue: result, operator: "", prevValue: "" };
      } else {
        return { ...state };
      }
  }
}

function App() {
  const [{ prevValue, currValue, operator }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <header className="header-bg">
        <img src="../public/icons8-calculator-96.png"></img>
        <h1>CalciFY</h1>
      </header>

      <div className="container">
        <div className="calc-grid">
          <div className="output">
            <div className="prev-res">
              {prevValue}
              {operator}
            </div>
            <div className="curr-res">{currValue}</div>
          </div>
          <InputButton
            type="clear-digit"
            dispatch={dispatch}
            className="span-two"
          >
            AC
          </InputButton>
          <InputButton type="delete-digit" dispatch={dispatch}>
            DEL
          </InputButton>
          <InputButton type="choose-operation" dispatch={dispatch}>
            ÷
          </InputButton>
          <InputButton type="add-digit" dispatch={dispatch}>
            1
          </InputButton>
          <InputButton type="add-digit" dispatch={dispatch}>
            2
          </InputButton>
          <InputButton type="add-digit" dispatch={dispatch}>
            3
          </InputButton>
          <InputButton type="choose-operation" dispatch={dispatch}>
            *
          </InputButton>
          <InputButton type="add-digit" dispatch={dispatch}>
            4
          </InputButton>
          <InputButton type="add-digit" dispatch={dispatch}>
            5
          </InputButton>
          <InputButton type="add-digit" dispatch={dispatch}>
            6
          </InputButton>
          <InputButton type="choose-operation" dispatch={dispatch}>
            +
          </InputButton>
          <InputButton type="add-digit" dispatch={dispatch}>
            7
          </InputButton>
          <InputButton type="add-digit" dispatch={dispatch}>
            8
          </InputButton>
          <InputButton type="add-digit" dispatch={dispatch}>
            9
          </InputButton>
          <InputButton type="choose-operation" dispatch={dispatch}>
            -
          </InputButton>
          <InputButton type="add-digit" dispatch={dispatch}>
            .
          </InputButton>
          <InputButton type="add-digit" dispatch={dispatch}>
            0
          </InputButton>
          <InputButton type="evaluate" dispatch={dispatch} className="span-two">
            =
          </InputButton>
        </div>
      </div>
      <footer className="footer-bg">
        <p>Made by Naman Yadav With ❤️</p>
      </footer>
    </div>
  );
}

export default App;
