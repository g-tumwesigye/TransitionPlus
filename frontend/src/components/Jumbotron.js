import React from 'react';
import background from '../public/images/image-10.jpg';

const jumbotronStyle = {
  background: `url(${background}) no-repeat center center`,
  backgroundSize: 'cover',
  color: 'white',
  textAlign: 'center',
  padding: '5rem 1rem',
  marginBottom: '0',
};

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid" id="home" style={jumbotronStyle}>
      <div className="container">
        <h1 className="display-4">Welcome to TransitionPlus</h1>
        <p className="lead">Empowering Students for a Brighter Future</p>
        <a href="#get-started" className="btn btn-primary btn-lg">Get Started</a>
      </div>
    </div>
  );
}

export default Jumbotron;

