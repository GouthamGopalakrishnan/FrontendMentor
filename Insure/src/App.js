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
      <Navbar />
      <Jumbotron />
      <Different />
      <Violet />
      <Footer />
    </div>
  );
}

export default App;
