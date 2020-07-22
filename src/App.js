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
          {this.name}
          <button>Button</button>
        </div>

        {React.createElement('button', {className:"App"}, "React")}
        &nbsp; 
      </div>
    );
  }
}

export default App;



// nice tool to see the code online
// https://babeljs.io/