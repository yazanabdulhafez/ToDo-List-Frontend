import React, { Component } from 'react'
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

export class App extends Component {
  render() {
    return (
      <div>
       <Home />
       <Footer /> 
      </div>
    )
  }
}

export default App; 

