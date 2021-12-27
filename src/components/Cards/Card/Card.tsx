import React from 'react';

interface Props {
  strMeal?: string;
  strInstructions?: string;
  strMealThumb?: string;
}

const Card: React.FC<Props> = ({
  strMeal,
  strInstructions,
  strMealThumb,
}: Props) => {
  return (
    <div className="card">
      <img className="card-image" src={strMealThumb} alt="" />
      <div className="card-info">
        <div className="card-name">{strMeal}</div>
        <div className="card-description">{strInstructions}</div>
      </div>
    </div>
  );
};

export default Card;
