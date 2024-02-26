import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './Template/Navbar'
import Home from "./Home";

function App() {
  return (
    <div>
      <Router>
          <div>
            <Navbar />
          </div>
          <div><Home /></div>
      </Router>
    </div>
  );
}

export default App;

