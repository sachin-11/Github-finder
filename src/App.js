import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const name = "sachin singh";
    const loading = true;
    const showName = false;

    return (
      <div className="App">
        {loading ? (
          <h4>loading...</h4>
        ) : (
          <h1>Hello {showName ? name : null}</h1>
        )}
      </div>
    );
  }
}

export default App;
