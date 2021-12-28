import React from 'react';

interface Props {
  className: string;
  cardText: string;
  handleChange: () => void;
}

const Button: React.FC<Props> = ({
  className,
  cardText,
  handleChange,
}: Props) => {
  return (
    <button className={className} onClick={handleChange}>
      {cardText}
    </button>
  );
};

export default Button;
