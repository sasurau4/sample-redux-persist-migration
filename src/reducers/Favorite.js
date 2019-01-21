import { SET_FAVORITE_FRUIT } from '../actions';

const initialState = {
  fruit: 'Apple',
};

function favorite(state = initialState, action) {
  switch (action.type) {
    case SET_FAVORITE_FRUIT: {
      return { ...state, fruit: action.payload.fruit };
    }
    default: {
      return state;
    }
  }
}

export { favorite };
