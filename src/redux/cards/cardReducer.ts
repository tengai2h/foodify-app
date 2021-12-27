import {
  GET_CARDS,
  SET_CUSTOM_CARD,
  SET_FAVORITES_CARDS,
} from './actionTypes';
import { CardState } from './cardReducerTypes';
import { UserAction } from './cardReducerTypes';

const initialState: CardState = {
  cards: [],
  favoritesCards: [],
  loading: false,
  error: null,
};

export const cardReducer = (
  state = initialState,
  action: UserAction,
): CardState => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        loading: true,
        error: null,
        cards: action.payload,
      };
    case SET_FAVORITES_CARDS:
      return {
        ...state,
        loading: true,
        error: null,
        favoritesCards: [...state.favoritesCards, action.payload],
      };
    case SET_CUSTOM_CARD:
      return {
        ...state,
        favoritesCards: [...state.favoritesCards, action.payload],
      };
    default:
      return state;
  }
};
