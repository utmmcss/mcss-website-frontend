import { FC } from 'react';

type CardProps = {
  elevation?: number;
  className?: string;
};

const Card: FC<CardProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default Card;
