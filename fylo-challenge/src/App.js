import React from 'react';

import './App.css';
import FyloNavbar from './Components/navbar';
import Secondary from './Components/secondary';
import Fouricons from './Components/fouricons';

function App() {
  return (
    <div className="Fylo-main-layout">

      <div className="container-fluid">
        <FyloNavbar />
        <Secondary />
        <Fouricons />
      </div>
    </div>
  );
}

export default App;
