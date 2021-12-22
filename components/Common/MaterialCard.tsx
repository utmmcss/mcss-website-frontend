import { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface IProps {
  children: ReactNode;
  className?: string;
}

const MaterialCard: FC<IProps> = ({ children, className }) => (
  <div
    className={classNames('w-40 h-56 material-card rounded-md', className, {
      'bg-white': !className?.includes('bg-'),
    })}
  >
    {children}
  </div>
);

export default MaterialCard;
