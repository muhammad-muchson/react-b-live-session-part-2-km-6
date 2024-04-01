import React, { useReducer } from "react";
// import reducer from "../utils/reducer/CounterReducer";
import { increment } from "../utils/helper/counterUtils";
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREAMENT":
      return { count: state.count + 1 };
    case "DECREAMENT":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function ExampleReducer() {
  const [state, dispatch] = useReducer(reducer, {
    data: [{ id: 1, name: "muchson" }],
  });
  return (
    <div>
      <h1>ExampleReducer</h1>
      Count : {state.count}
      {/* dalam event handle, jika kita pengen memasukkan parameter pada sebuah function, haru pakek arrow function */}
      {/* tapi, jika kita pengen memanggil saya functionnya itu bisa langusng aja */}
      <button onClick={() => dispatch({ type: "INCREAMENT" })}>
        Increment
      </button>
      <button onClick={() => increment(state.count)}>Increment fucntion</button>
    </div>
  );
}
