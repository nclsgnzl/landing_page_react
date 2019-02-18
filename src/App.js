import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Boton from './Components/modal_btn';
import Contenido from './Components/modal_cont';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contenido />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edite <code>src/App.js</code> y guarde para recargar.
          </p>
          <Boton />

        </header>
      </div>
    );
  }
}

export default App;
