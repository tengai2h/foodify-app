import { combineReducers } from 'redux';
import { cardReducer } from './cards/cardReducer';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const rootConfig = {
  key: 'root',
  storage,
  whiteList: ['cards'],
};

const cardsConfig = {
  key: 'cards',
  storage,
};

export const rootReducer = persistReducer(
  rootConfig,
  combineReducers({
    cards: persistReducer(cardsConfig, cardReducer),
  }),
);

export type RootState = ReturnType<typeof rootReducer>;
