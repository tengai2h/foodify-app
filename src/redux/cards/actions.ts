import { Dispatch } from 'redux';
import {
  GET_CARDS,
  SET_CUSTOM_CARD,
  SET_FAVORITES_CARDS,
} from './actionTypes';
import { UserAction } from './cardReducerTypes';

interface GetCardsCreatorType {
  type: typeof GET_CARDS;
  payload: [];
}

const getCardsCreator = (cards: []): GetCardsCreatorType => ({
  type: GET_CARDS,
  payload: cards,
});

export const getCards = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    const data = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php',
    );
    const { meals } = await data.json();
    dispatch(getCardsCreator(meals));
  };
};

export const setFavoriteCards = ([favoriteCards]: any) => ({
  type: SET_FAVORITES_CARDS,
  payload: favoriteCards,
});

export const setCustomCard = (
  strMeal: string,
  strInstructions: string,
) => ({
  type: SET_CUSTOM_CARD,
  payload: {
    strMeal,
    strInstructions,
  },
});
