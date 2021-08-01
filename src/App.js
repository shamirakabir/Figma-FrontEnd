/* Required Imports */ 
import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* CSS Files */
import './App.css';

/* Component Pages */
import Figma from './Components/Figma/Figma.js';

function App() {
  return (
    <div>
        <Router>
          <Route exact path={"/"} component={() => <Figma />}/>
        </Router>
    </div>
  );
}

export default App;
