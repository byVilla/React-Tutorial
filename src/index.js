import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import Toggle from "./toggle";
import LoginControl from "./logincontrol";
import Form from "./form";

import "./styles.css";

ReactDOM.render(<Clock />, document.getElementById("component"));
ReactDOM.render(<Toggle />, document.getElementById("toggle"));
ReactDOM.render(<LoginControl />, document.getElementById("loginControl"));
ReactDOM.render(<Form />, document.getElementById("form"));
