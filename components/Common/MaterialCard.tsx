import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className?: string;
}

const MaterialCard: FC<IProps> = ({ children, className }) => (
  <div className={`w-40 h-56 material-card rounded-md bg-white ${className}`}>{children}</div>
);

export default MaterialCard;
