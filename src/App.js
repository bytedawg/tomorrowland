import React, { Component } from "react";
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venue_info";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: "#000" }}>
        <Header />
        <Featured />
        <VenueInfo />
      </div>
    );
  }
}

export default App;