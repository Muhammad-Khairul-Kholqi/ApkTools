import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Template/Navbar'
import Home from './Home';
import CategoryTools from './Tools/CategoryTools';

// category tools
import Forms from './Tools/Category/Forms/Forms';
import CodeForms from "./Tools/Category/Forms/CodeForms";

const DefaultNavbar = ({children}) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route
                  path = "/"
                  element={
                    <DefaultNavbar>
                      <Home />
                    </DefaultNavbar>
                  }
              />

              <Route
                  path = "/category-tools"
                  element={
                    <DefaultNavbar>
                      <CategoryTools />
                    </DefaultNavbar>
                  }
              />

              {/* category tools */}
              <Route
                  path = "/category-forms"
                  element={
                    <DefaultNavbar>
                      <Forms />
                    </DefaultNavbar>
                  }
              />

              <Route
                  path = "/code-desc-forms"
                  element={
                    <DefaultNavbar>
                      <CodeForms />
                    </DefaultNavbar>
                  }
              />

          </Routes>
      </Router>
    </div>
  );
}

export default App;

