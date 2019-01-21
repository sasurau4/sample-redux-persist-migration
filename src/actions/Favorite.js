export const SET_FAVORITE_FRUIT = 'SET_FAVORITE_FRUIT';
export const SET_FAVORITE_ANIMAL = 'SET_FAVORITE_ANIMAL';

export function setFavoriteFruit(fruit) {
  return {
    type: SET_FAVORITE_FRUIT,
    payload: { fruit },
  };
}

export function setFavoriteAnimal(animal) {
  return {
    type: SET_FAVORITE_ANIMAL,
    payload: { animal },
  };
}
