import React, { Component } from "react";

class App extends Component {
  name = "React"
  render() {
    const isHere = "is here"
    return <div className="App">{this.name} &nbsp; {isHere}
    </div>;
  }
}

export default App;
