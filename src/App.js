import React, { Component } from "react";
import "./App.css";
import * as styles from "./styles";

class App extends Component {
  name = "Display jsx objects";
  render() {
    const var1 = {
      key1: "some data"
    }
    return (
      <div className="App">
        <div style={styles.styles}>
          {this.name}
        </div>
        {React.createElement("button", { className: "App" }, "Show me the obj")}
        &nbsp;

        {React.createElement("div", { className: "app" }, var1.key1)}

      </div>
    );
  }
}

export default App;

// nice tool to see the code online
// https://babeljs.io/
