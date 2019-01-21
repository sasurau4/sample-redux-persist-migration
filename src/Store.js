import { createStore } from 'redux';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const migrations = {
  0: state => {
    return {
      ...state,
      favorite: {
        ...state.favorite,
        animal: 'Tiger',
      },
    };
  },
};

const persistConfig = {
  key: 'root',
  version: 0,
  storage,
  debug: true,
  migrate: createMigrate(migrations, { debug: true }),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
