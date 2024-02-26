import React from "react";

import Navbar from './Template/Navbar'

function App() {
  return (
    <div>
      <div className = "fixed z-10 inset-x-0 top-0 shadow-md" >
        <Navbar />
      </div>
    </div>
  );
}

export default App;
