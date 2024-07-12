import React from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Features from './components/Features';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import './css/styles.css';

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <About />
      <Features />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;

