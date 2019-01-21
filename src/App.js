import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  incrementCounter,
  decrementCounter,
  setFavoriteFruit,
  setFavoriteAnimal,
} from './actions';
import { persistor } from './Store';

const allFruits = ['Apple', 'Orange', 'Grape'];
const allAnimals = ['Elephant', 'Tiger', 'Dog'];

// persistor.pause();
function App(props) {
  console.log(props);

  const {
    counter,
    increment,
    decrement,
    favorite,
    setFavoriteFruit,
    setFavoriteAnimal,
  } = props;
  const { fruit: favoriteFruit, animal: favoriteAnimal } = favorite;

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
        {favoriteFruit ? (
          <>
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
          </>
        ) : (
          <p>I don't like fruit!</p>
        )}
        {favoriteAnimal ? (
          <>
            <p>favorite animal: {favoriteAnimal}</p>
            {allAnimals.map(animalOption => {
              return (
                <React.Fragment key={animalOption}>
                  <input
                    type="radio"
                    id={animalOption}
                    name={animalOption}
                    value={animalOption}
                    checked={animalOption === favoriteAnimal}
                    onChange={() => setFavoriteAnimal(animalOption)}
                  />

                  <label htmlFor={animalOption}>{animalOption}</label>
                </React.Fragment>
              );
            })}
          </>
        ) : (
          <p>I don't like Animal!</p>
        )}
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
  setFavoriteAnimal: animal => dispatch(setFavoriteAnimal(animal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
