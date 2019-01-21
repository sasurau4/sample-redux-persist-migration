import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  incrementCounter,
  decrementCounter,
  setFavoriteFruit,
} from './actions';
import { persistor } from './Store';

const allFruits = ['Apple', 'Orange', 'Grape'];

function App(props) {
  console.log(props);
  const { counter, increment, decrement, favorite, setFavoriteFruit } = props;
  const { fruit: favoriteFruit } = favorite;

  return (
    <div className="App">
      <div>
        <h3>Counter</h3>
        <p>{counter}</p>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>INCREMENT</button>
      </div>
      <div>
        <h3>Favorite</h3>
        <p>favorite fruit: {favoriteFruit}</p>
        {allFruits.map(fruitOption => {
          return (
            <React.Fragment key={fruitOption}>
              <input
                type="radio"
                id={fruitOption}
                name={fruitOption}
                value={fruitOption}
                checked={fruitOption === favoriteFruit}
                onChange={() => setFavoriteFruit(fruitOption)}
              />
              <label htmlFor={fruitOption}>{fruitOption}</label>
            </React.Fragment>
          );
        })}
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
  ...state,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter()),
  setFavoriteFruit: fruit => dispatch(setFavoriteFruit(fruit)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
