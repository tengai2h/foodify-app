import { GET_CARDS } from './actionTypes';

export const getCardsCreator = (
  type: any,
  cards: [],
): GetCardsCreatorType => ({
  type: type,
  payload: cards,
});

interface GetCardsCreatorType {
  type: typeof GET_CARDS;
  payload: [];
}
