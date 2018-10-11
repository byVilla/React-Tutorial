import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";

import "./styles.css";

class Text extends React.Component {
  render() {
    return <h1>Incluir el texto {this.props.attrName}</h1>;
  }
}
const text = <Text attrName="Manuel" />;
ReactDOM.render(text, document.getElementById("test0"));
ReactDOM.render(<Clock />, document.getElementById("component"));
