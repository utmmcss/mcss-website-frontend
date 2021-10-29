import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  classNames?: string;
}

const MaterialCard: FC<IProps> = ({ children, classNames }) => (
  <div className={`w-40 h-56 material-card rounded-md bg-white ${classNames}`}>{children}</div>
);

export default MaterialCard;
