import React, { Component } from "react";
import Routing from "./Routing";
import "./App.css";
// import Navigation from "./Components/Navigation/navigationBar";

class App extends Component {
  render() {
    return (
      <div className="main" style={{ height: "100%" }}>
        <main style={{ marginTop: 60 }}>
          <Routing />
        </main>
      </div>
    );
  }
}

export default App;
