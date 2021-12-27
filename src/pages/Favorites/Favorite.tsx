import Card from 'components/Cards/Card/Card';
import React from 'react';
import { useTypedSelector } from 'redux/cards/useTypedSelector';

const Favorite: React.FC = () => {
  const favoritesCard = useTypedSelector(
    (state) => state.cards.favoritesCards,
  );

  const img =
    'https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png';

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
