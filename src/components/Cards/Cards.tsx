import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCards, setFavoriteCards } from 'redux/cards/actions';
import { useTypedSelector } from 'redux/cards/useTypedSelector';

import Card from './Card/Card';
import Button from 'components/Buttons/Button';
import { likeButton, skipButton } from 'constants/buttons';

const Cards: React.FC = () => {
  const dispatch = useDispatch();
  const cards = useTypedSelector((state) => state.cards.cards);
  const loading = useTypedSelector((state) => state.cards.loading);
  const favoriteCards = useTypedSelector(
    (state) => state.cards.cards,
  );

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  const handleChange = () => {
    dispatch(getCards());
  };

  const getFavoriteCards = () => {
    dispatch(setFavoriteCards(favoriteCards));
    dispatch(getCards());
  };

  return (
    <div className="cards">
      {loading
        ? cards.map((elem, id) => <Card {...elem} key={id} />)
        : false}
      <div className="card-buttons">
        <Button
          {...skipButton}
          handleChange={() => handleChange()}
        ></Button>
        <Button
          {...likeButton}
          handleChange={() => getFavoriteCards()}
        ></Button>
      </div>
    </div>
  );
};

export default Cards;
