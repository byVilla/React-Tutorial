import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

const name = "José Perez";
const title = <h1> Hello, {name}</h1>;
ReactDOM.render(title, document.getElementById("root"));

function formatName(user) {
  return user.firstName + " " + user.lastName;
}
const user = {
  firstName: "Lorenzo",
  lastName: "Lamas"
};
const element = <h2>Hello, {formatName(user)}</h2>;
ReactDOM.render(element, document.getElementById("root"));
