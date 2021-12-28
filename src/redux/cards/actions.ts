import { Dispatch } from 'redux';

import {
  GET_CARDS,
  ADD_NEW_DISH,
  SET_FAVORITES_CARDS,
} from './actionTypes';
import { UserAction } from './cardReducerTypes';
import { getCardsCreator } from './actionCreators';

export const getCards = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    const data = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php',
    );
    const { meals } = await data.json();
    dispatch(getCardsCreator(GET_CARDS, meals));
  };
};

export const setFavoriteCards = ([favoriteCards]: any) =>
  getCardsCreator(SET_FAVORITES_CARDS, favoriteCards);

export const setCustomCard = (
  strMeal: string,
  strInstructions: string,
) => ({
  type: ADD_NEW_DISH,
  payload: {
    strMeal,
    strInstructions,
  },
});
