import React from "react";
import FoodNav from "./FoodNav";
import { Route, BrowserRouter } from "react-router-dom";
import Food from "./Food";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FoodNav />
        <Route exact path="/food/:name">
          <Food />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
