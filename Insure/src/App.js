import React from 'react';
import Navbar from './Components/navbar';
import Jumbotron from './Components/jumbotron';
import Different from './Components/different';
import Violet from './Components/violet';
import Footer from './Components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid w-100">
        <Navbar />
        <div className="app-layout">
          <Jumbotron className="app-layout"/>
          <Different className="app-layout2" />
        </div>

        <Violet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
