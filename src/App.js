import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { incrementCounter, decrementCounter } from './actions';
import { persistor } from './Store';

function App(props) {
  console.log(props);
  const { counter, increment, decrement } = props;

  return (
    <div className="App">
      <div>
        <p>{counter}</p>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>INCREMENT</button>
      </div>
      <div>
        <button onClick={() => persistor.purge()}>
          clear persisted store!
        </button>
      </div>
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
