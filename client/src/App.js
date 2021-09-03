import React, { Component } from 'react';
import "./App.css";
import MiniBoard from "./components/MiniBoard/MiniBoard";

class App extends Component() {
    render(){
  return (
    <div className="App">
      <header class="main-header">
        <nav>
          <h1>Chess Board Room Plugin</h1>
        </nav>
      </header>
     <div className = "app__container">
        <div className="color one">
            <div className="box">
            <MiniBoard id="234" playerOne="Annietah" playerTwo="codeJonin" />
            </div></div>
        <div className="color two">
            <div className="box">
            <MiniBoard id="234" playerOne="" playerTwo="codeJonin" />
                </div></div>
        <div className="color three">
            <div className="box">
            <MiniBoard id="234" playerOne="Vermilion" playerTwo="" />
                </div></div>
        <div className="color four">
        <div className="box">
            <MiniBoard id="234" playerOne="" playerTwo="" />
                </div></div>
        <div className="color five">
        <div className="box">
            <MiniBoard id="234" playerOne="SOI" playerTwo="Realice" />
                </div></div>
        <div className="color six">
        <div className="box">
            <MiniBoard id="234" playerOne="DevPriest" playerTwo="bombos" />
                </div></div>
     </div>
      
    
    </div>
  );
    }
}

export default App;
