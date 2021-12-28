import React from 'react';
import { useMemo } from 'react';

import { useTypedSelector } from 'redux/cards/useTypedSelector';
import Card from 'components/Cards/Card/Card';
import { img } from 'constants/img';

const Favorite: React.FC = () => {
  const favoritesCards = useTypedSelector(
    (state) => state.cards.favoritesCards,
  );

  const favoritesCardWithPlaceholders = useMemo(() => {
    return favoritesCards.map((card, i) => {
      if (card.hasOwnProperty('strMealThumb')) {
        return <Card {...card} key={i} />;
      }

      const props = { ...card, strMealThumb: img };

      return <Card {...props} key={i} />;
    });
  }, [favoritesCards]);

  return (
    <>
      <div className="cards-wrapper">
        {/* {favoritesCard.map((elem, i) => {
          if (elem.hasOwnProperty('strMealThumb')) {
            return <Card {...elem} key={i} />;
          } else {
            Object.assign(elem, { strMealThumb: img });
            return <Card {...elem} key={i} />;
          }
        })} */}
        {favoritesCardWithPlaceholders}
      </div>
    </>
  );
};

export default Favorite;
