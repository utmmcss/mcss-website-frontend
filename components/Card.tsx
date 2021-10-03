import { FC } from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: FC<CardProps> = ({ children, className }) => (
  <div
    className={className}
    // style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}
  >
    {children}
  </div>
);

export default Card;
