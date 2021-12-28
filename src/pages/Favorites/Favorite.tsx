import React from 'react';

import { useTypedSelector } from 'redux/cards/useTypedSelector';
import Card from 'components/Cards/Card/Card';
import { img } from 'constants/img';

const Favorite: React.FC = () => {
  const favoritesCard = useTypedSelector(
    (state) => state.cards.favoritesCards,
  );

  return (
    <>
      <div className="cards-wrapper">
        {favoritesCard.map((elem, i) => {
          if (elem.hasOwnProperty('strMealThumb')) {
            return <Card {...elem} key={i} />;
          } else {
            Object.assign(elem, { strMealThumb: img });
            return <Card {...elem} key={i} />;
          }
        })}
      </div>
    </>
  );
};

export default Favorite;
