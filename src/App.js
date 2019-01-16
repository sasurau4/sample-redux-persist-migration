import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { incrementCounter, decrementCounter } from './actions';
import store from './Store';

const unsubscribe = store.subscribe(() => console.log(store.getState()));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <p>{store.getState().counter}</p>
          <button onClick={() => store.dispatch(incrementCounter())}>
            INCREMENT
          </button>
          <button onClick={() => store.dispatch(decrementCounter())}>
            INCREMENT
          </button>
        </div>
      </Provider>
    );
  }
}

export default App;
