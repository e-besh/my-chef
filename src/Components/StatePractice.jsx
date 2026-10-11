import React, { useState } from "react";
import Count from "./Count";
import data from "../assets/data.js";
//*parent hold the data(count) and controls how it changes
//*count is a child only job is to display a number given to it
const StatePractice = () => {
  const [count, setCount] = useState(0);
  const [isData, setIsData] = useState(data);
  function add() {
    setCount((prevCount) => prevCount + 1);
  }
  function minus() {
    setCount((prevCount) => prevCount - 1);
  }
  const listElements = isData.map((isData) => (
    <div key={isData.id}>
      <h2>{isData.title || isData.name}</h2>
      <p>{isData.category}</p>
      <p>{isData.price}</p>
      <p>{isData.desc}</p>
    </div>
  ));
  return (
    <>
      <button onClick={minus} className="minus">
        -
      </button>
      <Count number={count} />
      <Count number={count} />
      <button onClick={add} className="plus">
        +
      </button>
      <div>{listElements}</div>
    </>
  );
};

export default StatePractice;
