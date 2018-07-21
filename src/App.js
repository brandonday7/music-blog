import React, { Component } from 'react';

import GetPosts from "./Queries/GetPosts"
import NavBar from "./components/Layout/NavBar"

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <NavBar />
        <GetPosts />
      </div>
    );
  }
}

export default App;
