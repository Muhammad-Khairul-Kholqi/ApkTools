import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './Template/Navbar'

function App() {
  return (
    <div>
      <Router>
          <div>
            <Navbar />
          </div>
      </Router>
    </div>
  );
}

export default App;

