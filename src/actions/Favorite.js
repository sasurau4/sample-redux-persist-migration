export const SET_FAVORITE_FRUIT = 'SET_FAVORITE_FRUIT';

export function setFavoriteFruit(fruit) {
  return {
    type: SET_FAVORITE_FRUIT,
    payload: { fruit },
  };
}
