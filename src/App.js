import React, { Component } from "react";
import "./App.css";
import * as styles from "./styles";

class App extends Component {
  name = "React";
  render() {
   

    const isHere = "is here";
    return (
      <div className="App">
        <div style={styles.styles}>
          {this.name} &nbsp;
          <button>Button</button>
        </div>
        {isHere}
      </div>
    );
  }
}

export default App;
