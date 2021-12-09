import { FC } from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

/** @deprecated
 * use MaterialCard instead
*/
const Card: FC<CardProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default Card;
