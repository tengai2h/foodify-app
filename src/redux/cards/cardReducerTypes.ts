import {
  GET_CARDS,
  ADD_NEW_DISH,
  SET_FAVORITES_CARDS,
} from './actionTypes';

export interface CardState {
  cards: [];
  favoritesCards: [][];
  loading: boolean;
  error: null;
}

interface CardAction {
  type: typeof GET_CARDS;
  payload: [];
}

interface FavoriteCardAction {
  type: typeof SET_FAVORITES_CARDS;
  payload: [];
}

interface CustomCardAction {
  type: typeof ADD_NEW_DISH;
  payload: [];
}
export type UserAction =
  | CardAction
  | FavoriteCardAction
  | CustomCardAction;
