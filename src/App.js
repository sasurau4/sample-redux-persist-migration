import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { incrementCounter, decrementCounter } from './actions';

function App(props) {
  const { counter, increment, decrement } = props;

  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>INCREMENT</button>
    </div>
  );
}

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
