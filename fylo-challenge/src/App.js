import React from 'react';

import './App.css';
import FyloNavbar from './Components/navbar';
import Secondary from './Components/secondary';
import Fouricons from './Components/fouricons';
import Productive from './Components/productive';
import Quotes from './Components/quotes';
import Footer from './Components/footer';

function App() {
  return (
    <div className="Fylo-main-layout">

      <div className="container-fluid">
        <FyloNavbar />
        <Secondary />
        <Fouricons />
        <Productive />
        <Quotes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
