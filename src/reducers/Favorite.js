import { SET_FAVORITE_FRUIT, SET_FAVORITE_ANIMAL } from '../actions';

const initialState = {
  animal: 'elephant',
};

function favorite(state = initialState, action) {
  switch (action.type) {
    case SET_FAVORITE_FRUIT: {
      return { ...state, fruit: action.payload.fruit };
    }
    case SET_FAVORITE_ANIMAL: {
      return { ...state, animal: action.payload.animal };
    }
    default: {
      return state;
    }
  }
}

export { favorite };
