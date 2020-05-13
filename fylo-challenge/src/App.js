import React from 'react';

import './App.css';
import FyloNavbar from './Components/navbar';
import Secondary from './Components/secondary';
import Fouricons from './Components/fouricons';
import Productive from './Components/productive';
import Quotes from './Components/quotes';
import Footer from './Components/footer';
import Early from './Components/early';

function App() {
  return (
    <div className="Fylo-main-layout">

      <div className="container-fluid">
        <FyloNavbar />
        <Secondary />
        <Fouricons />
        <Productive />
        <div className="fylo-overlay">
          <div className="fylo-1"><Quotes /></div>
          <div className="fylo-2 align-middle w-100"> <Early /></div>
          <div className="fylo-3"> <Footer /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
