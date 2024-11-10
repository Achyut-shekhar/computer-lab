import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(1);
  //let counter = 4;

  const removeValue = () => {
    if (counter <= 0) {
      counter = 0;
    } else {
      setCounter(counter - 1);
      console.log("removed", counter);
    }
  };
  const addValue = () => {
    if (counter >= 20) {
      counter = 20;
    } else {
      counter = counter + 1;
      setCounter(counter);
      console.log("clicked", counter);
    }
  };
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value:{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value:{counter}</button>
    </>
  );
}

export default App;
