import Fooditem from "./components/FoodItem";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
;
import React from "react";
function App() {
  let FoodItem = ["dal","fuck this"];
  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>

      <ErrorMessage items={FoodItem}></ErrorMessage>
      <Fooditem items={FoodItem}></Fooditem>
    </>
  );
}

export default App;
