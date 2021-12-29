/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface IProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const MaterialCard: FC<IProps> = ({ children, className, onClick }) => (
  <div
    className={classNames('w-40 h-56 material-card', className, {
      'bg-white': !className?.includes('bg-'),
      'rounded-md': !className?.includes('rounded-'),
      'cursor-pointer': onClick,
    })}
    onClick={onClick}
  >
    {children}
  </div>
);

export default MaterialCard;
