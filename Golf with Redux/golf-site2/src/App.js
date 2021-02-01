 
import React,{Component} from 'react';

import Navbar from './components/navbar/Navbar';
import Features from './components/features/Features';
import MainContent from "./components/main/MainContent"

 

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="header" />
        <Navbar />
        <Features />
        
        <MainContent />
      </div>
    );
  }
}

export default App;
